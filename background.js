// Configuration
const CONFIG = {
    development: {
        backendUrl: 'http://localhost:4000',
        clientId: '560576158141-lbk1674i8fs6matjg4vi8cik941h6hj1.apps.googleusercontent.com',
        extensionId: 'ndfegimjcmepimkndlfkjmbgmccomleo',
        isDevelopment: true,
    },
    production: {
        backendUrl: 'https://reelwatchlist-backend.alekhkr.com',
        clientId: '560576158141-lbk1674i8fs6matjg4vi8cik941h6hj1.apps.googleusercontent.com',
        extensionId: 'ndfegimjcmepimkndlfkjmbgmccomleo',
        isDevelopment: false,
    }
};

// Use development config (can be changed based on environment)
const { backendUrl, clientId, extensionId, isDevelopment } = CONFIG.development;

/* Network Request Monitoring
This checks all the network request made and adds a listener to it, 
if any new request are being made that can be seen on the network tab.
This is to just check if the content is being dynamically modified on 
google search page or not, just to add the "+ Add to Watchlist" button dynamically.
This is to handle if multiple movies are shown like the google movie cards, 
and someone selects a movie, the google search content is dynamically changed, 
and then add the button.
*/
class NetworkMonitor {
    constructor() {
        this.tabRequestTimers = new Map();
        this.MINIMUM_TIME_BETWEEN_REQUESTS = 500; // 0.5 seconds
        this.currentTabId = null; // Track the current tabId
    }

    init() {
        this.setupRequestListener();
        this.setupTabCleanup();
    }

    setupRequestListener() {
        chrome.webRequest.onBeforeRequest.addListener(
            this.handleRequest.bind(this),
            { urls: ["https://www.google.com/search?*", "https://www.google.com/complete/search?*"] },
            ["requestBody"]
        );
    }

    setupTabCleanup() {
        chrome.tabs.onRemoved.addListener((tabId) => {
            this.tabRequestTimers.delete(tabId);
            if (this.currentTabId === tabId) {
                this.currentTabId = null; // Clear currentTabId if the tab is removed
            }
        });
    }

    async handleRequest(details) {
        const { tabId } = details;
        const currentTime = Date.now();

        if (this.shouldThrottleRequest(tabId, currentTime)) {
            // Skip if not enough time has passed
            return;
        }

        this.currentTabId = tabId; // Set the current tabId
        this.tabRequestTimers.set(tabId, currentTime); // Update last request time for this tab
        await this.notifyTab(tabId, details.url, currentTime);
    }

    shouldThrottleRequest(tabId, currentTime) {
        return (
            this.tabRequestTimers.has(tabId) &&
            currentTime - this.tabRequestTimers.get(tabId) < this.MINIMUM_TIME_BETWEEN_REQUESTS
        );
    }

    async notifyTab(tabId, url, timestamp) {
        try {
            const tab = await chrome.tabs.get(tabId);
            if (tab?.status === 'complete') {
                await chrome.tabs.sendMessage(tab.id, {
                    type: "newGetRequest",
                    url,
                    timestamp
                });
            }
        } catch (error) {
            if (isDevelopment) {
                console.error('Error notifying tab:', error);
            }
        }
    }
}

class PopupManager {
    openPopup() {
        chrome.action.openPopup();
    }
}

// Authentication Service
class AuthService {
    constructor() {
        this.isRefreshingToken = false;
        this.refreshTokenPromise = null;
    }

    async signIn() {
        await this.saveSignInStatus('SIGNIN_IN_PROGRESS');
        try {
            const authCode = await this.getAuthorizationCode();
            const tokens = await this.exchangeAuthCode(authCode);
            const userData = this.decodeJwt(tokens.idToken);

            await this.saveUserData(tokens, userData);
            await this.saveSignInStatus('SIGNIN_COMPLETED');
            return { userData };
        } catch (error) {
            apiService.sendErrorResponse('Sign in Failed', networkMonitor.currentTabId);
            if (isDevelopment) {
                console.error('Sign in failed:', error);
            }
            await this.saveSignInStatus('SIGNIN_FAILED');
            throw error;
        }
    }

    async getAuthorizationCode() {
        const authUrl = this.buildAuthUrl();
        const authResponse = await chrome.identity.launchWebAuthFlow({
            url: authUrl,
            interactive: true
        });

        const params = new URLSearchParams(authResponse.split("?")[1]);
        const authCode = params.get("code");

        if (!authCode) {
            throw new Error("Failed to get authorization code");
        }

        return authCode;
    }

    buildAuthUrl() {
        const params = new URLSearchParams({
            client_id: clientId,
            response_type: 'code',
            redirect_uri: `https://${extensionId}.chromiumapp.org`,
            scope: 'openid email profile',
            access_type: 'offline',
            prompt: 'consent'
        });

        return `https://accounts.google.com/o/oauth2/auth?${params.toString()}`;
    }

    async exchangeAuthCode(authCode) {
        const response = await fetch(`${backendUrl}/google-oauth/exchange-auth-code`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ authCode })
        });

        if (!response.ok) {
            throw new Error("Failed to exchange auth code for tokens");
        }

        return response.json();
    }

    decodeJwt(token) {
        return JSON.parse(atob(token.split(".")[1]));
    }

    async saveUserData(tokens, userData) {
        await chrome.storage.local.set({
            idToken: tokens.idToken,
            refreshToken: tokens.refreshToken,
            reelwatchlistJwtToken: tokens.reelwatchlistJwtToken,
            userData: {
                email: userData.email,
                name: userData.name,
                picture: userData.picture
            }
        });
    }

    async saveSignInStatus(status) {
        await chrome.storage.local.set({ signedInStatus: status });
    }

    async signOut() {
        await chrome.storage.local.remove(["idToken", "refreshToken", "userData", "reelwatchlistJwtToken", "signedInStatus"]);
        await this.clearCookies();
    }

    async clearCookies() {
        const cookiesToRemove = [
            { url: backendUrl, name: "reelwatchlistRefreshToken" }
        ];

        for (const cookie of cookiesToRemove) {
            try {
                await chrome.cookies.remove({ url: cookie.url, name: cookie.name });
            } catch (error) {
                apiService.sendErrorResponse('Error Occured!', networkMonitor.currentTabId)
                if (isDevelopment) {
                    console.error("Error removing cookie:", error);
                }
            }
        }
    }

    async refreshReelwatchlistJwtToken() {
        if (this.isRefreshingToken) {
            return this.refreshTokenPromise;
        }

        this.isRefreshingToken = true;
        this.refreshTokenPromise = this.performTokenRefresh();
        return this.refreshTokenPromise;
    }

    async performTokenRefresh() {
        try {
            const response = await fetch(`${backendUrl}/jwt/refresh-token`, {
                method: "POST",
                credentials: "include" // include the cookies, that contains the reelwatchlistRefreshToken, send this to backend
            });

            if (!response.ok) {
                await this.signOut();
                throw new Error("Failed to refresh token");
            }

            const { accessToken } = await response.json();
            await chrome.storage.local.set({ reelwatchlistJwtToken: accessToken });
            return accessToken;
        } catch (error) {
            apiService.sendErrorResponse('Error while login!', networkMonitor.currentTabId)
            await this.signOut();
            if (isDevelopment) {
                console.error("Error refreshing token:", error);
            }
            return null;
        } finally {
            this.isRefreshingToken = false;
            this.refreshTokenPromise = null;
        }
    }

    async refreshGoogleIdToken(refreshToken) {
        try {
            const response = await fetch(`${backendUrl}/google-oauth/refresh-token`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ refreshToken })
            });

            if (!response.ok) {
                throw new Error("Failed to refresh token");
            }

            const { idToken } = await response.json();
            const userData = this.decodeJwt(idToken);
            await this.saveUserData({ idToken }, userData);

            return true;
        } catch (error) {
            apiService.sendErrorResponse('Error while login to google!', networkMonitor.currentTabId)
            if (isDevelopment) {
                console.error("Failed to refresh Google token:", error);
            }
            return false;
        }
    }
}

// API Service
class ApiService {
    constructor(authService) {
        this.authService = authService;
    }

    async makeAuthenticatedRequest(url, options = {}) {
        const tokens = await chrome.storage.local.get(["idToken", "refreshToken", "reelwatchlistJwtToken"]);

        if (!this.validateTokens(tokens)) {
            popupManager.openPopup();
            throw new Error("Authentication required. Please log in.");
        }

        // Check token (google token) expiration and refresh if needed
        await this.handleTokenExpiration(tokens);

        return this.executeRequest(url, options, tokens);
    }

    validateTokens(tokens) {
        const { idToken, refreshToken, reelwatchlistJwtToken } = tokens;
        return idToken && refreshToken && reelwatchlistJwtToken;
    }

    async handleTokenExpiration(tokens) {
        const decodedToken = this.authService.decodeJwt(tokens.idToken);
        const currentTime = Math.floor(Date.now() / 1000);

        if (decodedToken.exp < currentTime) {
            const refreshed = await this.authService.refreshGoogleIdToken(tokens.refreshToken);
            if (!refreshed) {
                await this.authService.signOut();
                throw new Error("Session expired. Please log in again.");
            }
        }
    }

    async executeRequest(url, options, tokens) {
        const headers = {
            ...options.headers,
            'Authorization': `Bearer ${tokens.reelwatchlistJwtToken}`
        };

        try {
            let response = await fetch(`${backendUrl}/${url}`, { ...options, headers });

            if (response.status === 401) {
                // Access token (reelwatchlistJwtToken) might be expired, refresh it
                const newAccessToken = await this.authService.refreshReelwatchlistJwtToken();
                if (!newAccessToken) {
                    throw new Error("Failed to refresh access token");
                }

                // Retry with new token
                response = await fetch(`${backendUrl}/${url}`, {
                    ...options,
                    headers: { ...headers, 'Authorization': `Bearer ${newAccessToken}` }
                });
            }

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            return response;
        } catch (error) {
            if (isDevelopment) {
                console.error('Request failed:', error);
            }
            if (error.message === 'Failed to fetch') {
                throw new Error('Network Error!');    
            }
            throw new Error(error);
        }
    }

    async sendErrorResponse(error, tabId) {
        const tab = await chrome.tabs.get(tabId);
        const timestamp = Date.now();
        try {
            await chrome.tabs.sendMessage(tab.id, {
                type: "errorOccured",
                timestamp,
                error
            });
        } catch(error) {
            if (isDevelopment) {
                console.error('Error sending error response', error);
            }
        }
    }
}

// Initialize services
const networkMonitor = new NetworkMonitor();
const authService = new AuthService();
const apiService = new ApiService(authService);
const popupManager = new PopupManager();

// Set up message listeners
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'signIn') {
        authService.signIn().then(response => sendResponse(response));
        return true;
    }

    if (request.action === 'signOut') {
        authService.signOut().then(() => sendResponse({}));
        return true;
    }

    if (request.action === 'fetchProtectedData') {
        apiService.makeAuthenticatedRequest(request.url, {
            method: request.method || 'GET',
            body: request.body ? JSON.stringify(request.body) : undefined,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => sendResponse({ success: true, data }))
            .catch(error => {
                sendResponse({ success: false, error: error.message })
                apiService.sendErrorResponse(error.message, networkMonitor.currentTabId);
            });
        return true;
    }
});

// Initialize network monitoring
networkMonitor.init();
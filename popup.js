// Constants and DOM Elements
const ELEMENTS = {
    search: document.getElementById('search'),
    searchBtn: document.getElementById('searchBtn'),
    results: document.getElementById('results'),
    watchlist: document.getElementById('watchlistItems'),
    login: {
        button: document.getElementById('loginButton'),
        container: document.getElementById('loginContainer'),
        logoutButton: document.getElementById('logoutButton'),
        userInfo: document.getElementById('userInfo'),
        userName: document.getElementById('userName'),
        userEmail: document.getElementById('userEmail'),
        profileImage: document.getElementById('profileImage'),
        innerContainer: document.getElementById('inner-container')
    }
};

// API Service
class PopupApiService {
    static async fetchAuthenticated(url, method, body = null) {
        try {
            const response = await new Promise((resolve, reject) => {
                chrome.runtime.sendMessage(
                    { action: 'fetchProtectedData', url, method, body },
                    (response) => {
                        if (chrome.runtime.lastError) {
                            reject(new Error(chrome.runtime.lastError.message));
                            return;
                        }
                        resolve(response);
                    }
                );
            });

            if (!response.success) {
                throw new Error(response.error || 'Failed to fetch data');
            }

            return response.data;
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }

    static async searchMovies(query) {
        return this.fetchAuthenticated(`search-movie?q=${encodeURIComponent(query)}`, 'GET');
    }
}

// Movie Search Handler
class PopupMovieSearchHandler {
    static displayResults(movies) {
        ELEMENTS.results.innerHTML = '';

        if (movies.Response === "False") {
            ELEMENTS.results.innerHTML = `<p>${movies.Error}</p>`;
            return;
        }

        const movieElements = movies.Search.map(movie => this.createMovieElement(movie));
        movieElements.forEach(element => ELEMENTS.results.appendChild(element));
        this.attachWatchlistListeners();
    }

    static createMovieElement(movie) {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie-item';
        movieDiv.innerHTML = `
            <h3>${movie.Title} (${movie.Year})</h3>
            <button class="add-to-watchlist" data-title="${movie.Title}">Add to Watchlist</button>
        `;
        return movieDiv;
    }

    static attachWatchlistListeners() {
        const addButtons = document.querySelectorAll('.add-to-watchlist');
        addButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const title = e.target.getAttribute('data-title');
                WatchlistManager.addMovie(title);
            });
        });
    }

    static async handleSearch(query) {
        try {
            const data = await PopupApiService.searchMovies(query);
            this.displayResults(data.movieList);
        } catch (error) {
            console.error('Search error:', error);
            ELEMENTS.results.innerHTML = `<p>Error searching movies: ${error.message}</p>`;
        }
    }
}

// Watchlist Manager
class PopupWatchlistManager {
    static async addMovie(title) {
        chrome.storage.local.get(['watchlist'], (result) => {
            const watchlist = result.watchlist || [];
            if (!watchlist.includes(title)) {
                watchlist.push(title);
                chrome.storage.local.set({ watchlist });
                this.loadWatchlist();
            } else {
                alert(`${title} is already in your watchlist!`);
            }
        });
    }

    static loadWatchlist() {
        chrome.storage.local.get(['watchlist'], (result) => {
            const watchlist = result.watchlist || [];
            ELEMENTS.watchlist.innerHTML = '';
            
            watchlist.forEach(title => {
                const listItem = document.createElement('li');
                listItem.textContent = title;
                ELEMENTS.watchlist.appendChild(listItem);
            });
        });
    }
}

// Auth UI Manager
class PopupAuthUIManager {
    static createSpinner(button) {
        const originalHTML = button.innerHTML;
        const spinner = document.createElement('div');
        
        Object.assign(spinner.style, {
            width: '30px',
            height: '30px',
            border: '3px solid #ff9e9e',
            borderTop: '3px solid #ffffff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
        });

        const buttonRect = button.getBoundingClientRect();
        Object.assign(button.style, {
            height: `${buttonRect.height}px`,
            width: `${buttonRect.width}px`
        });

        button.innerHTML = '';
        button.disabled = true;
        button.appendChild(spinner);

        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        return originalHTML;
    }

    static toggleUserInfoView(userData, isAuthenticated) {
        const { login } = ELEMENTS;
        
        if (isAuthenticated) {
            login.userName.textContent = userData.name;
            login.userEmail.textContent = userData.email;
            login.profileImage.src = userData.picture;
            login.container.style.display = 'none';
            login.innerContainer.style.display = 'block';
            login.userInfo.style.display = 'flex';
        } else {
            login.container.style.display = 'flex';
            login.userInfo.style.display = 'none';
            login.innerContainer.style.display = 'none';
        }
    }
}

// Event Listeners and Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Check initial auth state
    chrome.storage.local.get(['idToken', 'userData'], (result) => {
        if (result.idToken && result.userData) {
            PopupAuthUIManager.toggleUserInfoView(result.userData, true);
        } else {
            PopupAuthUIManager.toggleUserInfoView(null, false);
        }
    });

    // Search button click handler
    ELEMENTS.searchBtn.addEventListener('click', () => {
        const query = ELEMENTS.search.value;
        if (query) {
            PopupMovieSearchHandler.handleSearch(query);
        }
    });

    // Login button click handler
    ELEMENTS.login.button.addEventListener('click', function() {
        const originalHTML = PopupAuthUIManager.createSpinner(this);
        chrome.runtime.sendMessage({ action: 'signIn' }, (response) => {
            if (response.userData) {
                PopupAuthUIManager.toggleUserInfoView(response.userData, true);
            }
            this.innerHTML = originalHTML;
            this.disabled = false;
        });
    });

    // Logout button click handler
    ELEMENTS.login.logoutButton.addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: 'signOut' }, () => {
            chrome.storage.local.remove(["idToken", "refreshToken", "userData", "reelwatchlistJwtToken"]);
            PopupAuthUIManager.toggleUserInfoView(null, false);
        });
    });

    // Load initial watchlist
    PopupWatchlistManager.loadWatchlist();
});
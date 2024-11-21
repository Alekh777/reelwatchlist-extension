// This is to just check if the content is being dynamically modified on google search page or not
let lastRequestTime = 0;
const MINIMUM_TIME_BETWEEN_REQUESTS = 500; // 500ms between requests

// This checks all the network request made and adds a listener to it, if any new request are being made that can be seen on the network tab
chrome.webRequest.onBeforeRequest.addListener(
  async function(details) {
    if (details.method === "GET" && 
       (details.url.startsWith("https://www.google.com/search?") || 
        details.url.startsWith("https://www.google.com/complete/search?"))) {
      
      const currentTime = Date.now();
      
      // Check if enough time has passed since last request
      if (currentTime - lastRequestTime < MINIMUM_TIME_BETWEEN_REQUESTS) {
        return; // Skip if not enough time has passed
      }
      
      // Update last request time
      lastRequestTime = currentTime;
      
      try {
        const tab = await chrome.tabs.get(details.tabId);
        
        if (tab && tab.status === 'complete') {
          try {
            await chrome.tabs.sendMessage(tab.id, {
              type: "newGetRequest",
              url: details.url,
              timestamp: currentTime
            });
          } catch (error) {
            console.log('Failed to send message to content script:', error);
          }
        }
      } catch (error) {
        console.log('Error processing request:', error);
      }
    }
  },
  {
    urls: [
      "https://www.google.com/search?*",
      "https://www.google.com/complete/search?*"
    ]
  },
  ["requestBody"]
);

// Reset timer when tab is closed
chrome.tabs.onRemoved.addListener(() => {
  lastRequestTime = 0;
});
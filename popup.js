// Constants and DOM Elements
const POPUP_CONFIG = {
    ELEMENTS: {
        search: document.getElementById('search'),
        searchBtn: document.getElementById('searchBtn'),
        watchlist: document.getElementById('watchlistItems'),
        searchWatchlistInput: document.getElementById('search-watchlist'),
        headerTitle: document.getElementById('header-title'),
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
    },
    ANIMATIONS: {
        KEYFRAMES: `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            @keyframes popIn {
                0% { transform: scale(0); }
                50% { transform: scale(1.2); }
                100% { transform: scale(1); }
            }
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `
    },
    isDevelopment: true,
    STYLES: {
        loader: {
            base: {
                padding: '40px 20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }
        },
        spinner: {
            base: {
                width: '30px',
                height: '30px',
                border: '3px solid #333',
                borderTop: '3px solid #ff4d4d',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
            }
        },
        movieItem: {
            searchResult: {
                base: {
                    padding: '12px',
                    display: 'flex',
                    gap: '12px',
                    borderBottom: '1px solid #333',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                    borderRadius: '8px'
                },
                hover: {
                    backgroundColor: '#2a2a2a'
                },
                mouseLeave: {
                    backgroundColor: 'transparent'
                }
            }
        },
        posterListContainer: {
            base: {
                width: '100%',
                paddingTop: '150%', // 2:3 aspect ratio
                position: 'relative',
                marginBottom: '12px',
                backgroundColor: '#0a0a0a',
                borderRadius: '4px',
                overflow: 'hidden',
            }
        },
        poster: {
            poster: {
                base: {
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                },
            },
            title: {
                base: {
                    color: '#ffffff',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '1.2'
                }
            },
            year: {
                base: {
                    color: '#cccccc',
                    fontSize: '12px'
                }
            },
            type: {
                base: {
                    marginTop: 'auto',
                    backgroundColor: '#ff4d4d',
                    color: '#ffffff',
                    padding: '6px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    alignSelf: 'flex-start'
                }
            },
            typeAndCheckMarkContainer: {
                base: {
                    marginTop: 'auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                }
            },
            titleAndCompletedReelContainer: {
                base: {
                    display: 'flex',
                    justifyContent: 'space-between',
                }
            },
            successContainer: {
                base: {

                }
            }
        },
        posterContainer: {
            base: {
                width: '60px',
                height: '90px',
                position: 'relative',
                flexShrink: '0',
                backgroundColor: '#0a0a0a',
                borderRadius: '4px',
                overflow: 'hidden',
            },
            poster: {
                base: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }
            },
            infoContainer: {
                base: {
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                }
            },
        },
        dropdown: {
            base: {
                position: 'fixed',
                width: '300px',
                maxHeight: '400px',
                overflowY: 'auto',
                backgroundColor: '#1e1e1e',
                border: '1px solid #333',
                borderRadius: '8px',
                zIndex: '9999',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
            }
        },
        loadingContainer: {
            base: {
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: '#1e1e1e',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: '0',
                transition: 'opacity 0.2s ease-out',
            }
        },
        successContainer: {
            base: {
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: '#1e1e1e',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '16px',
                opacity: '0',
                transition: 'opacity 0.2s ease-out',
            }
        },
        checkmark: {
            base: {
                minWidth: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '1px solid #ff4d4d',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: 'scale(0)',
                transition: 'background-color 0.3s ease-in-out',
                animation: 'popIn 0.3s ease-out forwards',
                position: 'relative',
            },
            small: {
                minWidth: '24px',
                height: '24px',
                borderRadius: '50%',
                border: '1px solid #ff4d4d',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: 'scale(0)',
                animation: 'popIn 0.3s ease-out forwards',
                position: 'relative',
            },
            hover: {
                backgroundColor: '#ff4d4d',
                cursor: 'pointer',
            },
            mouseLeave: {
                backgroundColor: 'transparent',
            }
        },
        checkmarkIcon: {
            base: {
                width: '25px',
                height: '25px',
            },
            small: {
                width: '15px',
                height: '15px'
            },
        },
        tooltip: {
            base: {
                visibility: 'hidden',
                position: 'absolute',
                width: '120px',
                top: '120%',
                right: '0',
                fontSize: '12px',
                backgroundColor: '#1e1e1e',
                color: '#ffffff',
                border: '1px solid #333',
                textAlign: 'center',
                borderRadius: '6px',
                padding: '5px 10px',
                zIndex: '2',
                opacity: '0',
                transition: 'opacity 0.3s, visibility 0.3s',
            },
            hover: {
                visibility: 'visible',
                opacity: '1'
            },
            mouseLeave: {
                visibility: 'hidden',
                opacity: '0'
            }
        },
        cross: {
            base: {
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#ff4d4d',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: 'scale(0)',
                animation: 'popIn 0.3s ease-out forwards',
            },
            small: {
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: '#ff4d4d',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: 'scale(0)',
                animation: 'popIn 0.3s ease-out forwards',
            }
        },
        crossIcon: {
            base: {
                width: '25px',
                height: '25px'
            },
            small: {
                width: '15px',
                height: '15px'
            }
        },
        successText: {
            base: {
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: '500',
                opacity: '0',
                animation: 'fadeIn 0.3s ease-out 0.2s forwards',
            }
        },
    },
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
        return this.fetchAuthenticated(`omdb-search-movie?q=${encodeURIComponent(query)}`, 'GET');
    }

    static async getUserWatchlist() {
        return this.fetchAuthenticated(`get-user-watchlist`, 'GET');
    }

    static async addToWatchlist(imdbID = null) {
        const postBody = { imdbID };
        const url = `add-to-watchlist`;
        try {
            const data = await this.fetchAuthenticated(url, 'POST', postBody);
            return data;
        } catch (error) {
            if (POPUP_CONFIG.isDevelopment) {
                console.error('Error fetching movie data:', error);
            }
            // WatchlistManager.handleErrorStateForDropdown(error.message || 'Error Occured!')
            throw error;
        }
    }

    static async updateStatusOfMovie(imdbID, status) {
        const postBody = { imdbID, status };
        const url = `update-user-watchlist-status`;
        try {
            const data = await this.fetchAuthenticated(url, 'POST', postBody);
            return data;
        } catch (error) {
            if (POPUP_CONFIG.isDevelopment) {
                console.error('Error updating movie status:', error);
            }
            // WatchlistManager.handleErrorStateForDropdown(error.message || 'Error Occured!')
            throw error;
        }
    }

    static async deleteMovie(imdbID) {
        const postBody = { imdbID, newIsActive: 0 };
        const url = `update-user-watchlist-status`;
        try {
            const data = await this.fetchAuthenticated(url, 'POST', postBody);
            return data;
        } catch (error) {
            if (POPUP_CONFIG.isDevelopment) {
                console.error('Error updating movie status:', error);
            }
            // WatchlistManager.handleErrorStateForDropdown(error.message || 'Error Occured!')
            throw error;
        }
    }
}

// Movie Search Handler
class PopupMovieSearchHandler {
    static query = '';
    static displayResults(movies) {
        POPUP_CONFIG.ELEMENTS.watchlist.innerHTML = '';
        POPUP_CONFIG.ELEMENTS.searchWatchlistInput.style.display = `none`;

        POPUP_CONFIG.ELEMENTS.headerTitle.textContent = `Search Results for "${this.query}"`;

        const backBtnContainer = this.getBackBtn();
        
        POPUP_CONFIG.ELEMENTS.headerTitle.prepend(backBtnContainer);

        if (movies.Response === "False") {
            POPUP_CONFIG.ELEMENTS.watchlist.innerHTML = `<p>${movies.Error}</p>`;
            return;
        }

        PopupUIHelper.createMovieDropdown(movies.Search, POPUP_CONFIG.ELEMENTS.watchlist, true);
    }

    static getBackBtn() {
        const backBtnContainer = document.createElement('div');
        backBtnContainer.style.display = 'inline-block';
        backBtnContainer.style.margin = '0 8px 0 0';
        const back = document.createElement('div');
        const backIcon = document.createElement('div');
        const tooltip = document.createElement('span');

        PopupUIHelper.applyStyles(back, POPUP_CONFIG.STYLES.checkmark.small);

        PopupUIHelper.applyStyles(backIcon, POPUP_CONFIG.STYLES.checkmarkIcon.small);
        backIcon.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                <path d="M21 12H5M5 12L12 19M5 12L12 5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        `;
        PopupUIHelper.applyStyles(tooltip, POPUP_CONFIG.STYLES.tooltip.base);
        tooltip.style.left = '115%';
        tooltip.style.top = '0';

        tooltip.textContent = 'Go back'

        back.addEventListener('mouseenter', () => {
            PopupUIHelper.applyStyles(tooltip, POPUP_CONFIG.STYLES.tooltip.hover);
            PopupUIHelper.applyStyles(back, POPUP_CONFIG.STYLES.checkmark.hover);
        });

        back.addEventListener('mouseleave', () => {
            PopupUIHelper.applyStyles(tooltip, POPUP_CONFIG.STYLES.tooltip.mouseLeave);
            PopupUIHelper.applyStyles(back, POPUP_CONFIG.STYLES.checkmark.mouseLeave);
        });

        back.addEventListener('click', async () => {
            back.style.border = 'none'
            back.style.pointerEvents = 'none'
            back.style.background = 'transparent'
            // Go back to watchlist
            back.remove();
            PopupWatchlistManager.loadWatchlist();
        });

        back.appendChild(backIcon);
        back.appendChild(tooltip);

        backBtnContainer.appendChild(back);
        return backBtnContainer;
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

    static async handleSearch(query) {
        this.query = query;
        const originalHTML = PopupAuthUIManager.createSpinner(POPUP_CONFIG.ELEMENTS.watchlist, false);
        POPUP_CONFIG.ELEMENTS.watchlist.style.display = 'flex';
        try {
            const data = await PopupApiService.searchMovies(query);
            this.displayResults(data.movieList);
        } catch (error) {
            console.error('Search error:', error);
            POPUP_CONFIG.ELEMENTS.watchlist.innerHTML = `<p>Error searching movies: ${error.message}</p>`;
        }
    }
}

// Watchlist Manager
class PopupWatchlistManager {

    static watchlist = [];

    static async addToWatchlist(title) {
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

    static displayWatchlist(filteredWatchlist = null) {
        POPUP_CONFIG.ELEMENTS.watchlist.innerHTML = '';

        const watchlist = filteredWatchlist || this.watchlist;

        PopupUIHelper.createMovieDropdown(watchlist, POPUP_CONFIG.ELEMENTS.watchlist);
    }

    static async loadWatchlist() {
        POPUP_CONFIG.ELEMENTS.headerTitle.textContent = `Your Watchlist`;
        POPUP_CONFIG.ELEMENTS.searchWatchlistInput.style.display = `inline-block`;
        POPUP_CONFIG.ELEMENTS.watchlist.style.display = 'flex'
        const originalHTML = PopupAuthUIManager.createSpinner(POPUP_CONFIG.ELEMENTS.watchlist, false);

        try {
            const data = await PopupApiService.getUserWatchlist();
            this.watchlist = data.watchlist;
            this.displayWatchlist();
        } catch (error) {
            console.error('Search error:', error);
            POPUP_CONFIG.ELEMENTS.watchlist.innerHTML = `<p>Error loading watchlist: ${error.message}</p>`;
        }

    }
}

class PopupLoadingUI {
    static showLoadingState(dropdown) {
        const loadingContainer = document.createElement('div');
        PopupUIHelper.applyStyles(loadingContainer, POPUP_CONFIG.STYLES.loadingContainer.base);
        
        const spinner = document.createElement('div');
        PopupUIHelper.applyStyles(spinner, POPUP_CONFIG.STYLES.spinner.base);
        
        loadingContainer.appendChild(spinner);
        dropdown.appendChild(loadingContainer);
        
        requestAnimationFrame(() => {
            loadingContainer.style.opacity = '1';
        });
        
        return loadingContainer;
    }

    static getErrorCross(shouldBeSmall, toolTipText) {
        const cross = document.createElement('div');
        PopupUIHelper.applyStyles(cross, shouldBeSmall ? POPUP_CONFIG.STYLES.cross.small : POPUP_CONFIG.STYLES.cross.base);
        
        const crossIcon = document.createElement('div');
        cross.classList.add('crossIcon')
        PopupUIHelper.applyStyles(crossIcon, shouldBeSmall ? POPUP_CONFIG.STYLES.crossIcon.small : POPUP_CONFIG.STYLES.crossIcon.base);
        const tooltip = document.createElement('span');
        tooltip.textContent = toolTipText || ``;

        cross.appendChild(tooltip);

        cross.addEventListener('mouseenter', () => {
            PopupUIHelper.applyStyles(tooltip, POPUP_CONFIG.STYLES.tooltip.hover);
        });
        
        cross.addEventListener('mouseleave', () => {
            PopupUIHelper.applyStyles(tooltip, POPUP_CONFIG.STYLES.tooltip.mouseLeave);
        });

        PopupUIHelper.applyStyles(tooltip, POPUP_CONFIG.STYLES.tooltip.base);
        crossIcon.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                <path d="M18 6L6 18" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 6L18 18" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        cross.appendChild(crossIcon);
        return {cross, crossIcon, crossTooltip: tooltip};
    }

    static getSuccessCheckMark(shouldBeSmall, movie, isSearchResultsContainer = false) {

        if (isSearchResultsContainer && !movie?.isAddedToWatchlist)  {
            return {successContainer: document.createElement('div'), checkmark: document.createElement('div'), cross: document.createElement('div')};
        }

        const checkmark = document.createElement('div');
        const checkmarkIcon = document.createElement('div');
        const tooltip = document.createElement('span');

        PopupUIHelper.applyStyles(checkmark, shouldBeSmall ? POPUP_CONFIG.STYLES.checkmark.small : POPUP_CONFIG.STYLES.checkmark.base);

        PopupUIHelper.applyStyles(checkmarkIcon, shouldBeSmall ? POPUP_CONFIG.STYLES.checkmarkIcon.small : POPUP_CONFIG.STYLES.checkmarkIcon.base);
        checkmarkIcon.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="#ff4d4d" stroke-width="3">
                <path d="M20 6L9 17L4 12" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        PopupUIHelper.applyStyles(tooltip, POPUP_CONFIG.STYLES.tooltip.base);

        if (movie?.status === 'COMPLETED' || (isSearchResultsContainer && movie?.isAddedToWatchlist)) {
            tooltip.textContent = (isSearchResultsContainer && movie?.isAddedToWatchlist) ? 'Already in Watchlist' : 'Watched!'

            checkmarkIcon.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                    <path d="M20 6L9 17L4 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;

            PopupUIHelper.applyStyles(checkmark, POPUP_CONFIG.STYLES.checkmark.hover);

            checkmark.addEventListener('mouseenter', () => {
                PopupUIHelper.applyStyles(tooltip, POPUP_CONFIG.STYLES.tooltip.hover);
            });
            
            checkmark.addEventListener('mouseleave', () => {
                PopupUIHelper.applyStyles(tooltip, POPUP_CONFIG.STYLES.tooltip.mouseLeave);
            });

            if (!isSearchResultsContainer) {
                checkmark.addEventListener('click', async () => {
                    checkmark.style.border = 'none'
                    checkmark.style.pointerEvents = 'none'
                    checkmark.style.background = 'transparent'
                    const originalHTML = PopupAuthUIManager.createSpinner(checkmark, false, '24px');
                    try {
                        await PopupApiService.updateStatusOfMovie(movie.imdbID, 'PLANNED');
                    } catch (error) {
                        // Show error
                    } finally {
                        PopupWatchlistManager.loadWatchlist();
                    }
                    
                });
            }

        } else if (!isSearchResultsContainer) {
            tooltip.textContent = 'Mark as Watched'
            tooltip.style.right = '115%';
            tooltip.style.top = '0';

            checkmark.addEventListener('mouseenter', () => {
                PopupUIHelper.applyStyles(tooltip, POPUP_CONFIG.STYLES.tooltip.hover);
                PopupUIHelper.applyStyles(checkmark, POPUP_CONFIG.STYLES.checkmark.hover);
                checkmarkIcon.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                        <path d="M20 6L9 17L4 12" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                `;
            });

            checkmark.addEventListener('mouseleave', () => {
                PopupUIHelper.applyStyles(tooltip, POPUP_CONFIG.STYLES.tooltip.mouseLeave);
                PopupUIHelper.applyStyles(checkmark, POPUP_CONFIG.STYLES.checkmark.mouseLeave);
                checkmarkIcon.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="#ff4d4d" stroke-width="3">
                        <path d="M20 6L9 17L4 12" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                `;
            });

            checkmark.addEventListener('click', async () => {
                checkmark.style.border = 'none'
                checkmark.style.pointerEvents = 'none'
                checkmark.style.background = 'transparent'
                const originalHTML = PopupAuthUIManager.createSpinner(checkmark, false, '24px');
                try {
                    await PopupApiService.updateStatusOfMovie(movie.imdbID, 'COMPLETED');
                } catch (error) {
                    // Show error
                } finally {
                    PopupWatchlistManager.loadWatchlist();
                }
                
            });
        }
        checkmark.appendChild(checkmarkIcon);
        checkmark.appendChild(tooltip);

        const container = document.createElement('div');
        PopupUIHelper.applyStyles(container, {
            position: 'relative',
            display: 'inline-block'
        });

        // Add existing checkmark
        container.appendChild(checkmark);

        // Create delete button with smaller cross
        const {cross, crossIcon, crossTooltip} = this.getErrorCross(true, 'Delete from Watchlist?');
        cross.style.transition = 'all 0.3s';
        cross.style.opacity = '0';
        cross.style.background = 'none';
        cross.style.border = '1px solid #ff4d4d';

        cross.addEventListener('mouseenter', () => {
            PopupUIHelper.applyStyles(crossTooltip, POPUP_CONFIG.STYLES.tooltip.hover);
            PopupUIHelper.applyStyles(cross, POPUP_CONFIG.STYLES.checkmark.hover);
            crossIcon.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                    <path d="M18 6L6 18" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 6L18 18" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
        });

        cross.addEventListener('mouseleave', () => {
            PopupUIHelper.applyStyles(crossTooltip, POPUP_CONFIG.STYLES.tooltip.mouseLeave);
            PopupUIHelper.applyStyles(cross, POPUP_CONFIG.STYLES.checkmark.mouseLeave);
            crossIcon.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                    <path d="M18 6L6 18" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 6L18 18" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
        });

        cross.addEventListener('click', async () => {
            const confirmed = confirm(`Delete "${movie.Title}" from your watchlist?`);
        
            if (confirmed) {
                cross.style.pointerEvents = 'none';
                cross.disabled = true;
                cross.style.border = 'none'
                cross.style.pointerEvents = 'none'
                cross.style.background = 'transparent'
                const originalHTML = PopupAuthUIManager.createSpinner(cross, false, '24px');
                try {
                    await PopupApiService.deleteMovie(movie.imdbID);
                } catch (error) {
                    // Show error
                } finally {
                    PopupWatchlistManager.loadWatchlist();
                }   
            }
            
        });

        cross.style.marginTop = '5px';

        container.appendChild(cross);
        return {successContainer: container, checkmark, cross};
    }

    static showSuccessState(dropdown, textContent) {
        const successContainer = document.createElement('div');
        PopupUIHelper.applyStyles(successContainer, POPUP_CONFIG.STYLES.successContainer.base);
        
        const successText = document.createElement('div');
        successText.textContent = textContent;
        PopupUIHelper.applyStyles(successText, POPUP_CONFIG.STYLES.successText.base);

        const {checkmark} = this.getSuccessCheckMark(false, null);
        
        successContainer.appendChild(checkmark);
        successContainer.appendChild(successText);
        dropdown.appendChild(successContainer);
        
        // Force reflow and then fade in
        requestAnimationFrame(() => {
            successContainer.style.opacity = '1';
        });
        
        return successContainer;
    }

    static showErrorState(dropdown, textContent) {
        const errorContainer = document.createElement('div');
        PopupUIHelper.applyStyles(errorContainer, POPUP_CONFIG.STYLES.successContainer.base);
        
        const errorText = document.createElement('div');
        errorText.textContent = textContent;
        PopupUIHelper.applyStyles(errorText, POPUP_CONFIG.STYLES.successText.base);

        const {cross} = this.getErrorCross(false);
        
        errorContainer.appendChild(cross);
        errorContainer.appendChild(errorText);
        dropdown.appendChild(errorContainer);
        
        // Force reflow and then fade in
        requestAnimationFrame(() => {
            errorContainer.style.opacity = '1';
        });
        
        return errorContainer;
    }
}

class PopupUIHelper {
    static applyStyles(element, styles) {
        Object.entries(styles).forEach(([key, value]) => {
            element.style[key] = value;
        });
    }

    static createStylesheet() {
        const style = document.createElement('style');
        style.textContent = POPUP_CONFIG.ANIMATIONS.KEYFRAMES;
        document.head.appendChild(style);
    }

    static async handleWatchlistSuccess(loadingContainer, dropdown, isAlreadyInWatchlist) {
        loadingContainer.style.opacity = '0';
        await new Promise(resolve => setTimeout(resolve, 200));
        loadingContainer.remove();
        
        const successContainer = PopupLoadingUI.showSuccessState(dropdown, isAlreadyInWatchlist ? 'Already in Watchlist' : 'Added to Watchlist!');
        
        // Close dropdown after delay
        setTimeout(() => {
            this.closeDropdown(dropdown);
        }, 1500);
    }

    static closeDropdown(dropdown) {
        dropdown.style.opacity = '0';
        dropdown.style.transform = 'scale(0.95)';
        dropdown.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out';
        
        setTimeout(() => {
            dropdown.remove();
        }, 200);
    }

    static handleErrorStateForDropdown(error, container) {
        PopupLoadingUI.showErrorState(container, error || 'Some Error Occurred!');
    }

    static createMovieDropdown(watchlist, container, isSearchResultsContainer = false) {
        let addedWatchedDiv = false;
            
        watchlist.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.className = 'movie-item';
            PopupUIHelper.applyStyles(movieItem, POPUP_CONFIG.STYLES.movieItem.searchResult.base);

            if (movie?.status === 'COMPLETED') {
                movieItem.style.opacity = '0.7';
                if (!addedWatchedDiv) {
                    const watchedDiv = document.createElement('h2');
                    watchedDiv.textContent = 'Watched!';
                    watchedDiv.style.padding = '10px 0';
                    watchedDiv.style.margin = '0';
                    POPUP_CONFIG.ELEMENTS.watchlist.appendChild(watchedDiv);
                    addedWatchedDiv = true;
                }
            }

            if (isSearchResultsContainer) {
                movieItem.addEventListener('click', async () => {
                    movieItem.style.border = 'none'
                    movieItem.style.pointerEvents = 'none'
                    movieItem.style.background = 'transparent'
                    movieItem.style.position = 'relative'

                    const loadingContainer = PopupLoadingUI.showLoadingState(movieItem);

                    try {
                        if (!movie.isAddedToWatchlist) {
                            await PopupApiService.addToWatchlist(movie.imdbID);
                        }
                        await this.handleWatchlistSuccess(loadingContainer, movieItem, movie.isAddedToWatchlist);
                    } catch (error) {
                        // Show error
                        if (POPUP_CONFIG.isDevelopment) {
                            console.error('Error:', error);
                        }
                        this.handleErrorStateForDropdown(error.message || 'Error adding to Watchlist!', movieItem)
                    }
                });
            }
        
            const posterContainer = document.createElement('div');
            PopupUIHelper.applyStyles(posterContainer, POPUP_CONFIG.STYLES.posterContainer.base);
        
            const poster = document.createElement('img');
            poster.src = movie.Poster !== 'N/A' ? movie.Poster : chrome.runtime.getURL("assets/images/place-holder.jpg");
            PopupUIHelper.applyStyles(poster, POPUP_CONFIG.STYLES.posterContainer.poster.base);
            posterContainer.appendChild(poster);
        
            const infoContainer = document.createElement('div');
            PopupUIHelper.applyStyles(infoContainer, POPUP_CONFIG.STYLES.posterContainer.infoContainer.base);
        
            const titleAndCompletedReelContainer = document.createElement('div');
            PopupUIHelper.applyStyles(titleAndCompletedReelContainer, POPUP_CONFIG.STYLES.poster.titleAndCompletedReelContainer.base);

            const title = document.createElement('div');
            title.textContent = movie.Title;
            PopupUIHelper.applyStyles(title, POPUP_CONFIG.STYLES.poster.title.base);

            const {successContainer, cross, checkmark} = PopupLoadingUI.getSuccessCheckMark(true, movie, isSearchResultsContainer) 
            PopupUIHelper.applyStyles(successContainer, POPUP_CONFIG.STYLES.poster.successContainer.base);

            titleAndCompletedReelContainer.appendChild(title);
            titleAndCompletedReelContainer.appendChild(successContainer);
        
            const year = document.createElement('div');
            year.textContent = movie.Year;
            PopupUIHelper.applyStyles(year, POPUP_CONFIG.STYLES.poster.year.base);
        
            const typeAndCheckMarkContainer = document.createElement('div');
            PopupUIHelper.applyStyles(typeAndCheckMarkContainer, POPUP_CONFIG.STYLES.poster.typeAndCheckMarkContainer.base);
        
            const type = document.createElement('div');
            type.textContent = movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1);
            PopupUIHelper.applyStyles(type, POPUP_CONFIG.STYLES.poster.type.base);
        
            const addedOnContainer = document.createElement('div');
            addedOnContainer.innerHTML = movie.status === 'COMPLETED' || movie.status === 'WATCHING'
                                            ? 'Last watched: ' + movie.lastWatchedAt + '<br>Added on: ' + movie.addedOn
                                            : isSearchResultsContainer ? '' : 'Added on: ' + movie.addedOn;
            addedOnContainer.style.marginTop = 'auto'
            addedOnContainer.style.textAlign = 'right'
            addedOnContainer.style.fontSize = '10px'
            addedOnContainer.style.color = 'lightgray'
        
            typeAndCheckMarkContainer.appendChild(type);
            typeAndCheckMarkContainer.appendChild(addedOnContainer);
        
            infoContainer.appendChild(titleAndCompletedReelContainer);
            infoContainer.appendChild(year);
            infoContainer.appendChild(typeAndCheckMarkContainer);
        
            movieItem.appendChild(posterContainer);
            movieItem.appendChild(infoContainer);
        
            container.appendChild(movieItem);

            container.style.display = 'block'
        
            movieItem.addEventListener('click', (e) => {
                e.stopPropagation(); 
                // WatchlistManager.removeFromWatchlist(movie, POPUP_CONFIG.ELEMENTS.watchlist);
            });

            movieItem.addEventListener('mouseenter', () => {
                PopupUIHelper.applyStyles(movieItem, POPUP_CONFIG.STYLES.movieItem.searchResult.hover);
                cross.style.opacity = '1';
            });
            movieItem.addEventListener('mouseleave', () => {
                PopupUIHelper.applyStyles(movieItem, POPUP_CONFIG.STYLES.movieItem.searchResult.mouseLeave);
                cross.style.opacity = '0';
            });
        });
    }
}

// Auth UI Manager
class PopupAuthUIManager {
    static createSpinner(container, isLightLoader, size = '30px') {
        const originalHTML = container.innerHTML;
        container.innerHTML = ''
        const spinner = document.createElement('div');
        
        Object.assign(spinner.style, {
            width: size,
            height: size,
            border: isLightLoader ? '3px solid #ff9e9e' : '3px solid #525252',
            borderTop: isLightLoader ? '3px solid #ffffff' : '3px solid #ff4d4d',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
        });

        container.appendChild(spinner);

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
        const { login } = POPUP_CONFIG.ELEMENTS;
        
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
    chrome.storage.local.get(['signedInStatus', 'idToken', 'userData'], (result) => {
        const { signedInStatus, idToken, userData } = result;

        if (signedInStatus === 'SIGNIN_COMPLETED' && idToken && userData) {
            PopupAuthUIManager.toggleUserInfoView(userData, true);
        } else if (signedInStatus === 'SIGNIN_IN_PROGRESS') {
            // Create spinner in login button
            const loginBtn = POPUP_CONFIG.ELEMENTS.login.button;
            const buttonRect = loginBtn.getBoundingClientRect();
            PopupAuthUIManager.createSpinner(loginBtn, true);
            Object.assign(loginBtn.style, {
                height: `${buttonRect.height}px`,
                width: `${buttonRect.width}px`
            });
        } else {
            PopupAuthUIManager.toggleUserInfoView(null, false);
        }
    });

    // Search button click handler
    POPUP_CONFIG.ELEMENTS.searchBtn.addEventListener('click', () => {
        const query = POPUP_CONFIG.ELEMENTS.search.value;
        if (query) {
            PopupMovieSearchHandler.handleSearch(query);
        }
    });

    // Add Enter key handler for search input
    POPUP_CONFIG.ELEMENTS.search.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            const query = POPUP_CONFIG.ELEMENTS.search.value;
            if (query) {
                PopupMovieSearchHandler.handleSearch(query);
            }
        }
    });

    // Login button click handler
    POPUP_CONFIG.ELEMENTS.login.button.addEventListener('click', function() {
        this.disabled = true;
        const buttonRect = this.getBoundingClientRect();
        const originalHTML = PopupAuthUIManager.createSpinner(this, true);
        Object.assign(this.style, {
            height: `${buttonRect.height}px`,
            width: `${buttonRect.width}px`
        });

        chrome.runtime.sendMessage({ action: 'signIn' }, (response) => {
            if (response.userData) {
                PopupAuthUIManager.toggleUserInfoView(response.userData, true);
            }
            this.innerHTML = originalHTML;
            this.disabled = false;
        });
    });

    // Logout button click handler
    POPUP_CONFIG.ELEMENTS.login.logoutButton.addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: 'signOut' }, () => {
            PopupAuthUIManager.toggleUserInfoView(null, false);
        });
    });

    // Logout button click handler
    POPUP_CONFIG.ELEMENTS.searchWatchlistInput.addEventListener('input', (event) => {
        const filteredWatchlist = PopupWatchlistManager.watchlist.filter(it => it.Title.toLowerCase().includes(event.target.value.toLowerCase()));
        PopupWatchlistManager.displayWatchlist(filteredWatchlist)
    });

    // Load initial watchlist
    PopupWatchlistManager.loadWatchlist();
    PopupUIHelper.createStylesheet();
});
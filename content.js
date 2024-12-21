// Constants and Configuration
const CONTENT_CONFIG = {
    SPOTLIGHT_LINKS: ['imdb.com/title/', 'primevideo.com', 'netflix.com'],
    isDevelopment: true,
    SELECTORS: {
        MOVIE_TITLE: '.PZPZlf.ssJ7i',
        RELEASE_YEAR: '.nwVKo',
        PARENT_DIV: '.HdbW6.MjUjnf.VM6qJ',
        SEARCH_RESULTS: 'div.g'
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
    STYLES: {
        searchResultH3: {
            titleText: {
                base: {
                    maxWidth: 'calc(100% - 150px)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }
            },
            titleElement: {
                base: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
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
        loader: {
            base: {
                padding: '40px 20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }
        },
        buttons: {
            addToWatchlist: {
                base: {
                    position: 'absolute',
                    bottom: '3px',
                    right: '0',
                    backgroundColor: '#ff4d4d',
                    color: 'white',
                    borderRadius: '5px',
                    border: 'none',
                    padding: '8px 15px',
                    marginLeft: '8px',
                    cursor: 'pointer',
                    flexShrink: '0',
                    transition: 'background-color 0.2s',
                },
                hover: {
                    backgroundColor: '#ff3333'
                },
                mouseLeave: {
                    backgroundColor: '#ff4d4d',
                }
            },
            fullViewAddToWatchlist: {
                base: {
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    padding: '12px',
                    margin: '0 10px',
                    backgroundColor: '#ff4d4d',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                },
                hover: {
                    backgroundColor: '#ff3333'
                },
                mouseLeave: {
                    backgroundColor: '#ff4d4d',
                }
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
                    transition: 'background-color 0.2s'
                },
                hover: {
                    backgroundColor: '#2a2a2a'
                },
                mouseLeave: {
                    backgroundColor: 'transparent'
                }
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
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#ff4d4d',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: 'scale(0)',
                animation: 'popIn 0.3s ease-out forwards',
                position: 'relative',
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
                position: 'relative',
            }
        },
        checkmarkIcon: {
            base: {
                width: '25px',
                height: '25px'
            },
            small: {
                width: '15px',
                height: '15px'
            }
        },
        tooltip: {
            base: {
                visibility: 'hidden',
                position: 'absolute',
                width: '110px',
                bottom: '120%',
                right: '0',
                fontSize: '12px',
                backgroundColor: '#1e1e1e',
                color: '#ffffff',
                border: '1px solid #333',
                textAlign: 'center',
                borderRadius: '6px',
                padding: '5px 10px',
                zIndex: '1',
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
        },
        singlePoster: {
            content: {
                base: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                }
            },
            titleYear: {
                base: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '8px',
                }
            },
            title: {
                base: {
                    color: '#ffffff',
                    fontSize: '16px',
                    fontWeight: '600',
                    flex: '1',
                }
            },
            year: {
                base: {
                    color: '#cccccc',
                    fontSize: '14px',
                }
            },
            ratingBadge: {
                base: {
                    backgroundColor: '#2a2a2a',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    color: '#ffffff',
                }
            },
            genre: {
                base: {
                    color: '#cccccc',
                    fontSize: '14px',
                }
            },
            plot: {
                base: {
                    color: '#ffffff',
                    fontSize: '14px',
                    marginTop: '8px',
                    lineHeight: '1.4',
                }
            },
            details: {
                base: {
                    display: 'flex',
                    gap: '12px',
                    marginTop: '8px',
                    color: '#cccccc',
                    fontSize: '14px',
                }
            },
        },
        noResults: {
            base: {
                padding: '12px',
                color: '#cccccc',
                textAlign: 'center'
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
    }
};

// State management
class WatchlistState {
    constructor() {
        this.isDropdownOpen = false;
    }

    setDropdownState(state) {
        this.isDropdownOpen = state;
    }

    getDropdownState() {
        return this.isDropdownOpen;
    }
}

const state = new WatchlistState();

// API Service
class ContentApiService {
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
            if (CONTENT_CONFIG.isDevelopment) {
                console.error('Fetch error:', error);
            }
            WatchlistManager.handleErrorStateForDropdown(error.message || 'Error Occured!')
            throw error;
        }
    }
    static async fetchMovieDetails(movieName, releaseYear, imdbID = null) {
        const params = this.buildPostBody(movieName, releaseYear, imdbID);
        const url = `omdb-search-movie?${new URLSearchParams(params)}`;
        try {
            const data = await this.fetchAuthenticated(url, 'GET');
            return data;
        } catch (error) {
            if (CONTENT_CONFIG.isDevelopment) {
                console.error('Error fetching movie data:', error);
            }
            WatchlistManager.handleErrorStateForDropdown(error.message || 'Error Occured!')
            throw error;
        }
    }

    static buildPostBody(movieName, releaseYear, imdbID) {
        if (imdbID) {
            return { imdbID };
        }
        return releaseYear 
            ? { q: movieName, releaseYear }
            : { q: movieName };
    }

    static async addToWatchlist(imdbID = null) {
        const postBody = { imdbID };
        const url = `add-to-watchlist`;
        try {
            const data = await this.fetchAuthenticated(url, 'POST', postBody);
            return data;
        } catch (error) {
            if (CONTENT_CONFIG.isDevelopment) {
                console.error('Error fetching movie data:', error);
            }
            WatchlistManager.handleErrorStateForDropdown(error.message || 'Error Occured!')
            throw error;
        }
    }

    static async mockApiCall(data, delay = 1000) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    status: 200,
                    data,
                    message: 'Mock API call successful'
                });
            }, delay);
        });
    }
}

// UI Components
class DropdownUI {
    static create(buttonElement, initialLoad = true) {
        this.removeExisting();
        const dropdown = this.createDropdownElement(buttonElement);

        WatchlistManager.currentDropdown = dropdown;
        
        if (initialLoad) {
            dropdown.appendChild(LoadingUI.createLoader());
            state.setDropdownState(true);
        }

        this.setupEventListeners(dropdown, buttonElement);
        document.body.appendChild(dropdown);
        this.adjustDropdownPosition(dropdown, buttonElement);
        
        return dropdown;
    }

    static removeExisting() {
        const existing = document.querySelector('.movie-search-dropdown');
        if (existing) existing.remove();
    }

    static createDropdownElement(buttonElement) {
        const dropdown = document.createElement('div');
        dropdown.className = 'movie-search-dropdown';
        const buttonRect = buttonElement.getBoundingClientRect();
        
        UIHelper.applyStyles(dropdown, CONTENT_CONFIG.STYLES.dropdown.base);
        dropdown.style.top = `${buttonRect.top}px`;
        dropdown.style.left = `${buttonRect.right + 12}px`;
        
        return dropdown;
    }

    static setupEventListeners(dropdown, buttonElement) {
        const updatePosition = () => {
            const newRect = buttonElement.getBoundingClientRect();
            dropdown.style.top = `${newRect.top}px`;
            dropdown.style.left = `${newRect.right + 12}px`;
        };

        window.addEventListener('scroll', updatePosition);
        
        // Add click outside listener to close dropdown
        document.addEventListener('click', (event) => {
            if (!dropdown.contains(event.target) && event.target !== buttonElement) {
                dropdown.remove();
                state.setDropdownState(false);
                window.removeEventListener('scroll', updatePosition);
            }
        });
    }

    static adjustDropdownPosition(dropdown, buttonElement) {
        const dropdownRect = dropdown.getBoundingClientRect();
        const buttonRect = buttonElement.getBoundingClientRect();
        
        if (dropdownRect.right > window.innerWidth) {
            dropdown.style.left = `${buttonRect.left - dropdownRect.width - 12}px`;
        }
    }
}

class LoadingUI {
    static createLoader() {
        const loader = document.createElement('div');
        UIHelper.applyStyles(loader, CONTENT_CONFIG.STYLES.loader.base);
        
        const spinner = document.createElement('div');
        UIHelper.applyStyles(spinner, CONTENT_CONFIG.STYLES.spinner.base);
        
        loader.appendChild(spinner);
        return loader;
    }

    static showLoadingState(dropdown) {
        const loadingContainer = document.createElement('div');
        UIHelper.applyStyles(loadingContainer, CONTENT_CONFIG.STYLES.loadingContainer.base);
        
        const spinner = document.createElement('div');
        UIHelper.applyStyles(spinner, CONTENT_CONFIG.STYLES.spinner.base);
        
        loadingContainer.appendChild(spinner);
        dropdown.appendChild(loadingContainer);
        
        requestAnimationFrame(() => {
            loadingContainer.style.opacity = '1';
        });
        
        return loadingContainer;
    }

    static getSuccessCheckMark(shouldBeSmall, isAlreadyInWatchlist) {
        const checkmark = document.createElement('div');
        UIHelper.applyStyles(checkmark, shouldBeSmall ? CONTENT_CONFIG.STYLES.checkmark.small : CONTENT_CONFIG.STYLES.checkmark.base);
        
        const checkmarkIcon = document.createElement('div');
        UIHelper.applyStyles(checkmarkIcon, shouldBeSmall ? CONTENT_CONFIG.STYLES.checkmarkIcon.small : CONTENT_CONFIG.STYLES.checkmarkIcon.base);
        checkmarkIcon.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                <path d="M20 6L9 17L4 12" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        checkmark.appendChild(checkmarkIcon);
        if (isAlreadyInWatchlist) {
            const tooltip = document.createElement('span');
            tooltip.textContent = 'Already in Watchlist'
            UIHelper.applyStyles(tooltip, CONTENT_CONFIG.STYLES.tooltip.base);
            checkmark.addEventListener('mouseenter', () => {
                UIHelper.applyStyles(tooltip, CONTENT_CONFIG.STYLES.tooltip.hover);
            });
            checkmark.addEventListener('mouseleave', () => {
                UIHelper.applyStyles(tooltip, CONTENT_CONFIG.STYLES.tooltip.mouseLeave);
            });
            checkmark.appendChild(tooltip);
        }
        return checkmark;
    }

    static getErrorCross(shouldBeSmall) {
        const cross = document.createElement('div');
        UIHelper.applyStyles(cross, shouldBeSmall ? CONTENT_CONFIG.STYLES.cross.small : CONTENT_CONFIG.STYLES.cross.base);
        
        const crossIcon = document.createElement('div');
        UIHelper.applyStyles(crossIcon, shouldBeSmall ? CONTENT_CONFIG.STYLES.crossIcon.small : CONTENT_CONFIG.STYLES.crossIcon.base);
        crossIcon.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                <path d="M18 6L6 18" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 6L18 18" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        cross.appendChild(crossIcon);
        return cross;
    }

    static showSuccessState(dropdown, textContent) {
        const successContainer = document.createElement('div');
        UIHelper.applyStyles(successContainer, CONTENT_CONFIG.STYLES.successContainer.base);
        
        const successText = document.createElement('div');
        successText.textContent = textContent;
        UIHelper.applyStyles(successText, CONTENT_CONFIG.STYLES.successText.base);

        const checkmark = this.getSuccessCheckMark(false, false);
        
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
        UIHelper.applyStyles(errorContainer, CONTENT_CONFIG.STYLES.successContainer.base);
        
        const errorText = document.createElement('div');
        errorText.textContent = textContent;
        UIHelper.applyStyles(errorText, CONTENT_CONFIG.STYLES.successText.base);

        const cross = this.getErrorCross(false);
        
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

class MovieResultsUI {
    static update(dropdown, data) {
        dropdown.innerHTML = '';
        dropdown.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out';

        if (data.isSingleMovieResult) {
            const movieDetails = data.Search[0];
            this.renderSingleMovie(dropdown, movieDetails);
        } else if (!data.isSingleMovieResult && data.Search.length > 0) {
            this.renderSearchResults(dropdown, data.Search);
        } else {
            this.renderNoResults(dropdown);
        }
    }

    static renderSingleMovie(dropdown, movie) {
        const movieItem = this.createSingleMovieView(dropdown, movie);
        dropdown.appendChild(movieItem);
    }

    static renderSearchResults(dropdown, movies) {
        movies.forEach(movie => {
            const movieItem = this.createSearchResultItem(dropdown, movie);
            dropdown.appendChild(movieItem);
        });
    }

    static renderNoResults(dropdown) {
        const noResults = document.createElement('div');
        noResults.textContent = 'No results found';
        UIHelper.applyStyles(noResults, CONTENT_CONFIG.STYLES.noResults.base);
        dropdown.appendChild(noResults);
    }

    static createSingleMovieView(dropdown, movie) {
        // Single movie view
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.style.padding = '16px';
        
        // Create poster container with fixed aspect ratio
        const posterListContainer = document.createElement('div');
        UIHelper.applyStyles(posterListContainer, CONTENT_CONFIG.STYLES.posterListContainer.base);

        const poster = document.createElement('img');
        poster.src = movie.Poster !== 'N/A' ? movie.Poster : chrome.runtime.getURL("assets/images/place-holder-large.png");
        UIHelper.applyStyles(poster, CONTENT_CONFIG.STYLES.poster.poster.base);
        posterListContainer.appendChild(poster);

        // Add button
        const addButton = document.createElement('button');
        addButton.textContent = movie.isAddedToWatchlist ? 'Already in Watchlist' : 'Add to Watchlist';
        UIHelper.applyStyles(addButton, CONTENT_CONFIG.STYLES.buttons.fullViewAddToWatchlist.base);

        addButton.addEventListener('mouseenter', () => {
            UIHelper.applyStyles(addButton, CONTENT_CONFIG.STYLES.buttons.fullViewAddToWatchlist.hover);
        });
        addButton.addEventListener('mouseleave', () => {
            UIHelper.applyStyles(addButton, CONTENT_CONFIG.STYLES.buttons.fullViewAddToWatchlist.mouseLeave);
        });

        addButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            WatchlistManager.addToWatchlist(movie, dropdown);
        });

        // Create content container
        const content = document.createElement('div');
        UIHelper.applyStyles(content, CONTENT_CONFIG.STYLES.singlePoster.content.base);

        // Title and Year
        const titleYear = document.createElement('div');
        UIHelper.applyStyles(titleYear, CONTENT_CONFIG.STYLES.singlePoster.titleYear.base);

        const title = document.createElement('div');
        title.textContent = movie.Title;
        UIHelper.applyStyles(title, CONTENT_CONFIG.STYLES.singlePoster.title.base);

        const year = document.createElement('div');
        year.textContent = movie.Year;
        UIHelper.applyStyles(year, CONTENT_CONFIG.STYLES.singlePoster.year.base);

        titleYear.appendChild(title);
        titleYear.appendChild(year);

        // Ratings
        const ratings = document.createElement('div');
        ratings.style.display = 'flex';
        ratings.style.gap = '8px';
        ratings.style.marginTop = '4px';

        if (movie.Ratings) {
            movie.Ratings.forEach(rating => {
                const ratingBadge = document.createElement('div');
                ratingBadge.textContent = rating.Value;
                UIHelper.applyStyles(ratingBadge, CONTENT_CONFIG.STYLES.singlePoster.ratingBadge.base);
                ratings.appendChild(ratingBadge);
            });
        }

        // Genre
        const genre = document.createElement('div');
        genre.textContent = movie.Genre;
        UIHelper.applyStyles(genre, CONTENT_CONFIG.STYLES.singlePoster.genre.base);

        // Plot
        const plot = document.createElement('div');
        plot.textContent = movie.Plot;
        UIHelper.applyStyles(plot, CONTENT_CONFIG.STYLES.singlePoster.plot.base);

        // Runtime and Rating
        const details = document.createElement('div');
        UIHelper.applyStyles(details, CONTENT_CONFIG.STYLES.singlePoster.details.base);
        details.textContent = `${movie.Runtime} • ${movie.Rated}`;

        content.appendChild(titleYear);
        content.appendChild(ratings);
        content.appendChild(genre);
        content.appendChild(plot);
        content.appendChild(details);

        movieItem.appendChild(posterListContainer);
        movieItem.appendChild(content);
        movieItem.appendChild(addButton);
        dropdown.appendChild(movieItem);

        return movieItem;
    }

    static createSearchResultItem(dropdown, movie) {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        UIHelper.applyStyles(movieItem, CONTENT_CONFIG.STYLES.movieItem.searchResult.base);

        movieItem.addEventListener('mouseenter', () => {
            UIHelper.applyStyles(movieItem, CONTENT_CONFIG.STYLES.movieItem.searchResult.hover);
        });
        movieItem.addEventListener('mouseleave', () => {
            UIHelper.applyStyles(movieItem, CONTENT_CONFIG.STYLES.movieItem.searchResult.mouseLeave);
        });

        const posterContainer = document.createElement('div');
        UIHelper.applyStyles(posterContainer, CONTENT_CONFIG.STYLES.posterContainer.base);

        const poster = document.createElement('img');
        poster.src = movie.Poster !== 'N/A' ? movie.Poster : chrome.runtime.getURL("assets/images/place-holder.jpg");
        UIHelper.applyStyles(poster, CONTENT_CONFIG.STYLES.posterContainer.poster.base);
        posterContainer.appendChild(poster);

        const infoContainer = document.createElement('div');
        UIHelper.applyStyles(infoContainer, CONTENT_CONFIG.STYLES.posterContainer.infoContainer.base);

        const title = document.createElement('div');
        title.textContent = movie.Title;
        UIHelper.applyStyles(title, CONTENT_CONFIG.STYLES.poster.title.base);

        const year = document.createElement('div');
        year.textContent = movie.Year;
        UIHelper.applyStyles(year, CONTENT_CONFIG.STYLES.poster.year.base);

        const typeAndCheckMarkContainer = document.createElement('div');
        UIHelper.applyStyles(typeAndCheckMarkContainer, CONTENT_CONFIG.STYLES.poster.typeAndCheckMarkContainer.base);

        const type = document.createElement('div');
        type.textContent = movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1);
        UIHelper.applyStyles(type, CONTENT_CONFIG.STYLES.poster.type.base);

        const addWatchlistCheckMark = movie.isAddedToWatchlist 
                                        ? LoadingUI.getSuccessCheckMark(true, true)
                                        : document.createElement('div');

        typeAndCheckMarkContainer.appendChild(type);
        typeAndCheckMarkContainer.appendChild(addWatchlistCheckMark);

        infoContainer.appendChild(title);
        infoContainer.appendChild(year);
        infoContainer.appendChild(typeAndCheckMarkContainer);

        movieItem.appendChild(posterContainer);
        movieItem.appendChild(infoContainer);
        dropdown.appendChild(movieItem);

        movieItem.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            WatchlistManager.addToWatchlist(movie, dropdown);
        });

        return movieItem;
    }
}

// Utility Classes
class UIHelper {
    static applyStyles(element, styles) {
        Object.entries(styles).forEach(([key, value]) => {
            element.style[key] = value;
        });
    }

    static createStylesheet() {
        const style = document.createElement('style');
        style.textContent = CONTENT_CONFIG.ANIMATIONS.KEYFRAMES;
        document.head.appendChild(style);
    }

    static isElementInDOMVisible(element) {
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        const style = window.getComputedStyle(element);

        return (
            rect.width > 0 && // Element has width
            rect.height > 0 && // Element has height
            style.display !== 'none' && // Not display:none
            style.visibility !== 'hidden' // Not visibility:hidden
        );
    }

    static createAddToWatchlistBtn(movieName, releaseYear, movieId = null) {
        const btn = document.createElement('button');
        btn.textContent = '+ Add to Watchlist';
        this.applyStyles(btn, CONTENT_CONFIG.STYLES.buttons.addToWatchlist.base);

        btn.addEventListener('mouseenter', () => {
            this.applyStyles(btn, CONTENT_CONFIG.STYLES.buttons.addToWatchlist.hover);
        });
        btn.addEventListener('mouseleave', () => {
            this.applyStyles(btn, CONTENT_CONFIG.STYLES.buttons.addToWatchlist.mouseLeave);
        });
        btn.setAttribute('data-moviename', movieName)
        btn.setAttribute('data-releaseyear', releaseYear);
        btn.setAttribute('data-movieid', movieId);

        btn.onclick = (event) => {
            WatchlistManager.handleAddition(btn);
        };

        return btn;
    }

    static checkAndAddBtnInGoogleMovieHeader() {
        const movieTitleElement = document.querySelector(CONTENT_CONFIG.SELECTORS.MOVIE_TITLE);
        const releaseYearElement = document.querySelector(CONTENT_CONFIG.SELECTORS.RELEASE_YEAR);
        const parentDiv = document.querySelector(CONTENT_CONFIG.SELECTORS.PARENT_DIV);
        const releaseYear = releaseYearElement ? (releaseYearElement.textContent.match(/\b(1[0-9]{3}|2[0-9]{3})\b/g)?.[0] || '') : '';
        
        // Check if both elements are present, which indicates a movie is displayed
        if (movieTitleElement && releaseYearElement && parentDiv && releaseYear !== '') {
            const movieTitle = movieTitleElement.textContent.trim();

            parentDiv.style.height = '110px';

            const btn = this.createAddToWatchlistBtn(movieTitle, releaseYear);
            btn.style.left = '0';
            btn.style.right = 'auto';

            releaseYearElement.insertAdjacentElement('afterend', btn);
            
            return {movieHeaderDetected: true, movieName: movieTitle, releaseYear}
        } else {
            return {movieHeaderDetected: false, movieName: null}
        }
    }

    static addBtnInSearchResults() {
        const searchResults = document.querySelectorAll(CONTENT_CONFIG.SELECTORS.SEARCH_RESULTS);

        searchResults.forEach((result) => {
            const titleElement = result.querySelector('h3');
            const linkElement = result.querySelector('a');
            const url = linkElement.href;

            if (titleElement && linkElement) {
                if (UIHelper.isElementInDOMVisible(titleElement) && CONTENT_CONFIG.SPOTLIGHT_LINKS.filter(it => url.includes(it)).length > 0) {
                    linkElement.style.position = 'relative';
                    const imdbID = url.includes('imdb') ? url.split("/")[4] : null; // Extract the IMDb ID
                    const titleElement = result.querySelector('h3');
                    const movieName = url.includes('netflix') 
                                            ? StringHelper.cleanNetflixTitle(result.querySelector('h3').textContent)
                                            : url.includes('primevideo')
                                                ? StringHelper.cleanPrimeTitle(result.querySelector('h3').textContent)
                                                : result.querySelector('h3').textContent;

                    const closestDiv = linkElement.closest('div');
                    closestDiv.style.position = 'relative';

                    const titleText = document.createElement('span');
                    titleText.textContent = titleElement.textContent;
                    UIHelper.applyStyles(titleText, CONTENT_CONFIG.STYLES.searchResultH3.titleText.base);
                    
                    UIHelper.applyStyles(titleElement, CONTENT_CONFIG.STYLES.searchResultH3.titleElement.base);

                    titleElement.innerHTML = '';
                    titleElement.appendChild(titleText);

                    const btn = this.createAddToWatchlistBtn(movieName, null, imdbID);

                    closestDiv.appendChild(btn);
                }
            }
        });
    }
}

class StringHelper {
    static removeYearSuffix(movieName) {
        return movieName.replace(/\((\d{4}.*?|film)\)$/, '').trim();
    }

    static cleanNetflixTitle(title) {
        return title.replace(/^Watch\s/, '').replace(/\s\|\sNetflix Official Site$/, '').trim();
    }

    static cleanPrimeTitle(title) {
        return title.replace(/^Prime Video:\s/, '').trim();
    }
}

// Main Application Logic
class WatchlistManager {

    static currentDropdown = null;

    static async handleAddition(btn) {
        if (state.getDropdownState()) return;

        const movieData = this.getMovieDataFromButton(btn);
        const dropdown = DropdownUI.create(btn);

        this.currentDropdown = dropdown;
        
        const data = await ContentApiService.fetchMovieDetails(
            movieData.name,
            movieData.year,
            movieData.id
        );

        MovieResultsUI.update(dropdown, data.movieList);
    }

    static getMovieDataFromButton(btn) {
        return {
            name: btn.getAttribute('data-moviename') === 'null' ? null : btn.getAttribute('data-moviename'),
            year: btn.getAttribute('data-releaseyear') === 'null' ? null : btn.getAttribute('data-releaseyear'),
            id: btn.getAttribute('data-movieid') === 'null' ? null : btn.getAttribute('data-movieid')
        };
    }

    static async addToWatchlist(movieData, dropdown) {
        const originalHeight = dropdown.offsetHeight;
        dropdown.style.height = `${originalHeight}px`;
        dropdown.innerHTML = '';
        
        const loadingContainer = LoadingUI.showLoadingState(dropdown);
        
        try {
            if (!movieData.isAddedToWatchlist) {
                await ContentApiService.addToWatchlist(movieData.imdbID);
            }
            await this.handleWatchlistSuccess(loadingContainer, dropdown, movieData.isAddedToWatchlist);
        } catch (error) {
            if (CONTENT_CONFIG.isDevelopment) {
                console.error('Error:', error);
            }
            this.handleErrorStateForDropdown(error.message || 'Error adding to Watchlist!')
        }
    }

    static async handleWatchlistSuccess(loadingContainer, dropdown, isAlreadyInWatchlist) {
        loadingContainer.style.opacity = '0';
        await new Promise(resolve => setTimeout(resolve, 200));
        loadingContainer.remove();
        
        const successContainer = LoadingUI.showSuccessState(dropdown, isAlreadyInWatchlist ? 'Already in Watchlist' : 'Added to Watchlist!');
        
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
            state.setDropdownState(false);
        }, 200);
    }

    static handleErrorStateForDropdown(error) {
        if (this.currentDropdown) {
            LoadingUI.showErrorState(this.currentDropdown, error || 'Some Error Occurred!');
            setTimeout(() => {
                this.closeDropdown(this.currentDropdown);
                this.currentDropdown = null;
            }, 1500);
        }
    }
}

// Initialize application
function initializeWatchlist() {
    UIHelper.createStylesheet();
    UIHelper.checkAndAddBtnInGoogleMovieHeader();
    UIHelper.addBtnInSearchResults();
}

// Event Listeners
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "newGetRequest" || request.type === "pageLoaded") {
        initializeWatchlist();
        sendResponse({ received: true });
    }
    if (request.type === "errorOccured") {
        setTimeout(() => {
            WatchlistManager.handleErrorStateForDropdown(request.error || 'Some Error Occured!');
        }, 1500);
        sendResponse({ received: true });
    }
    return true;
});

// Initial execution
initializeWatchlist();
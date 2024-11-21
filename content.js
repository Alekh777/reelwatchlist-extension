// Styles configuration
const styles = {
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
        }
    },
    checkmarkIcon: {
        base: {
            width: '25px',
            height: '25px'
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
                padding: '2px 8px',
                borderRadius: '4px',
                fontSize: '11px',
                alignSelf: 'flex-start'
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
};

let isDropdownOpen = false;

// Configuration
const CONFIG = {
    API_KEY: 'b2e364c8',
    API_BASE_URL: 'https://www.omdbapi.com/',
    SPOTLIGHT_LINKS: ['imdb.com/title/', 'primevideo.com', 'wikipedia.org', 'netflix.com']
};

// Utility functions
const applyStyles = (element, styles) => {
    Object.entries(styles).forEach(([key, value]) => {
        element.style[key] = value;
    });
};

const createStylesheet = () => {
    const style = document.createElement('style');
    style.textContent = `
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
    `;
    document.head.appendChild(style);
};

const createSpinner = () => {
    const spinner = document.createElement('div');
    applyStyles(spinner, styles.spinner.base);
    return spinner;
};

// Function to fetch movie details from OMDB API
const fetchMovieDetails = async (movieName, releaseYear, imdbId = null) => {
    const params = imdbId 
        ? { apikey: CONFIG.API_KEY, i: imdbId }
        : releaseYear 
            ? { apikey: CONFIG.API_KEY, s: movieName, y: releaseYear }
            : { apikey: CONFIG.API_KEY, s: movieName };

    const url = `${CONFIG.API_BASE_URL}?${new URLSearchParams(params)}`;
    
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching movie data:', error);
        throw error;
    }
};

const fakeApiCall = (data, delay = 1000) => {
    console.log('Calling API')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Mock data or response object
            const response = {
                status: 200,
                data: data,
                message: 'Fake API call successful'
            };
            
            resolve(response); // Resolve the promise with mock response
        }, delay);
    });
};

// Function to check if an element is visible in the viewport
const isElementInDOMAndVisible = (el) => {
    if (!el) return false; // Check if element exists

    const rect = el.getBoundingClientRect();

    return (
        rect.width > 0 && // Element has width
        rect.height > 0 && // Element has height
        window.getComputedStyle(el).display !== 'none' && // Not display:none
        window.getComputedStyle(el).visibility !== 'hidden' // Not visibility:hidden
    );
};
const showLoadingState = (dropdown) => {
    // Create loading container with same dimensions as content
    const loadingContainer = document.createElement('div');
    applyStyles(loadingContainer, styles.loadingContainer.base);
    
    const spinner = document.createElement('div');
    applyStyles(spinner, styles.spinner.base);
    
    loadingContainer.appendChild(spinner);
    dropdown.appendChild(loadingContainer);
    
    // Force reflow and then fade in
    requestAnimationFrame(() => {
        loadingContainer.style.opacity = '1';
    });
    
    return loadingContainer;
};

const showSuccessState = (dropdown) => {
    // Create success container
    const successContainer = document.createElement('div');
    applyStyles(successContainer, styles.successContainer.base);
    
    // Create success icon animation
    const checkmark = document.createElement('div');
    applyStyles(checkmark, styles.checkmark.base);
    
    // Create checkmark icon
    const checkmarkIcon = document.createElement('div');
    applyStyles(checkmarkIcon, styles.checkmarkIcon.base);
    checkmarkIcon.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
            <path d="M20 6L9 17L4 12" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
    checkmark.appendChild(checkmarkIcon);
    
    // Success successText
    const successText = document.createElement('div');
    successText.textContent = 'Added to Watchlist!';
    applyStyles(successText, styles.successText.base);
    
    successContainer.appendChild(checkmark);
    successContainer.appendChild(successText);
    dropdown.appendChild(successContainer);
    
    // Force reflow and then fade in
    requestAnimationFrame(() => {
        successContainer.style.opacity = '1';
    });
    
    return successContainer;
};

const addToWatchlist = async (movieData, dropdown) => {
    // Store original content height
    const originalHeight = dropdown.offsetHeight;
    dropdown.style.height = `${originalHeight}px`;
    dropdown.innerHTML = '';
    
    // Show loading state
    const loadingContainer = showLoadingState(dropdown);
    
    try {
        // Make API call to your backend
        // const response = await fetch('YOUR_BACKEND_URL/watchlist', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(movieData)
        // });

        await fakeApiCall('', 1500);
        console.log('API called for watchlist')

        // if (response.ok) {
            // Fade out loading state
            loadingContainer.style.opacity = '0';
            await new Promise(resolve => setTimeout(resolve, 200)); // Wait for fade out
            loadingContainer.remove();
            
            // Show success state
            const successContainer = showSuccessState(dropdown);
            
            // Close dropdown after delay
            setTimeout(() => {
                dropdown.style.opacity = '0';
                dropdown.style.transform = 'scale(0.95)';
                dropdown.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out';
                
                setTimeout(() => {
                    dropdown.remove();
                }, 200);
            }, 1500);
        // } else {
        //     // Handle error
        //     console.error('Failed to add to watchlist');
        //     // You might want to show an error state here
        // }
    } catch (error) {
        console.error('Error:', error);
        // You might want to show an error state here
    }
};

// Create and manage the dropdown list
const createMovieDropdown = (buttonElement, initialLoad = true) => {
    // Remove any existing dropdown
    const existingDropdown = document.querySelector('.movie-search-dropdown');
    if (existingDropdown) {
        existingDropdown.remove();
    }

    // Create dropdown container
    const dropdown = document.createElement('div');
    dropdown.className = 'movie-search-dropdown';
    
    // Get button position
    const buttonRect = buttonElement.getBoundingClientRect();
    
    // Set fixed positioning
    applyStyles(dropdown, styles.dropdown.base);
    dropdown.style.top = `${buttonRect.top}px`;
    dropdown.style.left = `${buttonRect.right + 12}px`;

    if (initialLoad) {
        // Create loader
        const loader = document.createElement('div');
        applyStyles(loader, styles.loader.base);
        
        const spinner = document.createElement('div');
        applyStyles(spinner, styles.spinner.base);
        
        loader.appendChild(spinner);
        dropdown.appendChild(loader);
        isDropdownOpen = true;
    }

    // Update dropdown position on scroll
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
            isDropdownOpen = false;
            window.removeEventListener('scroll', updatePosition);
        }
    });

    // Append to body
    document.body.appendChild(dropdown);
    
    // Check if dropdown goes off screen to the right
    const dropdownRect = dropdown.getBoundingClientRect();
    if (dropdownRect.right > window.innerWidth) {
        dropdown.style.left = `${buttonRect.left - dropdownRect.width - 12}px`;
    }

    return dropdown;
}

const updateDropdownContent = (dropdown, data) => {
    // Clear existing content
    dropdown.innerHTML = '';
    dropdown.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out';

    // Check if it's a single movie response or search results
    const isSingleMovie = !data.Search;

    if (isSingleMovie && data.Title) {
        // Single movie view
        const movie = data;
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.style.padding = '16px';
        
        // Create poster container with fixed aspect ratio
        const posterListContainer = document.createElement('div');
        applyStyles(posterListContainer, styles.posterListContainer.base);

        const poster = document.createElement('img');
        poster.src = movie.Poster !== 'N/A' ? movie.Poster : chrome.runtime.getURL("assets/images/place-holder-large.png");
        applyStyles(poster, styles.poster.poster.base);
        posterListContainer.appendChild(poster);

        // Add button
        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Watchlist';
        applyStyles(addButton, styles.buttons.fullViewAddToWatchlist.base);

        addButton.addEventListener('mouseenter', () => {
            applyStyles(addButton, styles.buttons.fullViewAddToWatchlist.hover);
        });
        addButton.addEventListener('mouseleave', () => {
            applyStyles(addButton, styles.buttons.fullViewAddToWatchlist.mouseLeave);
        });

        addButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            addToWatchlist(movie, dropdown);
        });

        // Create content container
        const content = document.createElement('div');
        applyStyles(content, styles.singlePoster.content.base);

        // Title and Year
        const titleYear = document.createElement('div');
        applyStyles(titleYear, styles.singlePoster.titleYear.base);

        const title = document.createElement('div');
        title.textContent = movie.Title;
        applyStyles(title, styles.singlePoster.title.base);

        const year = document.createElement('div');
        year.textContent = movie.Year;
        applyStyles(year, styles.singlePoster.year.base);

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
                applyStyles(ratingBadge, styles.singlePoster.ratingBadge.base);
                ratings.appendChild(ratingBadge);
            });
        }

        // Genre
        const genre = document.createElement('div');
        genre.textContent = movie.Genre;
        applyStyles(genre, styles.singlePoster.genre.base);

        // Plot
        const plot = document.createElement('div');
        plot.textContent = movie.Plot;
        applyStyles(plot, styles.singlePoster.plot.base);

        // Runtime and Rating
        const details = document.createElement('div');
        applyStyles(details, styles.singlePoster.details.base);
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

    } else if (data.Search && data.Search.length > 0) {
        // Search results view
        data.Search.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.className = 'movie-item';
            applyStyles(movieItem, styles.movieItem.searchResult.base);

            movieItem.addEventListener('mouseenter', () => {
                applyStyles(movieItem, styles.movieItem.searchResult.hover);
            });
            movieItem.addEventListener('mouseleave', () => {
                applyStyles(movieItem, styles.movieItem.searchResult.mouseLeave);
            });

            const posterContainer = document.createElement('div');
            applyStyles(posterContainer, styles.posterContainer.base);

            const poster = document.createElement('img');
            poster.src = movie.Poster !== 'N/A' ? movie.Poster : chrome.runtime.getURL("assets/images/place-holder.jpg");
            applyStyles(poster, styles.posterContainer.poster.base);
            posterContainer.appendChild(poster);

            const infoContainer = document.createElement('div');
            applyStyles(infoContainer, styles.posterContainer.infoContainer.base);

            const title = document.createElement('div');
            title.textContent = movie.Title;
            applyStyles(title, styles.poster.title.base);

            const year = document.createElement('div');
            year.textContent = movie.Year;
            applyStyles(year, styles.poster.year.base);

            const type = document.createElement('div');
            type.textContent = movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1);
            applyStyles(type, styles.poster.type.base);

            infoContainer.appendChild(title);
            infoContainer.appendChild(year);
            infoContainer.appendChild(type);

            movieItem.appendChild(posterContainer);
            movieItem.appendChild(infoContainer);
            dropdown.appendChild(movieItem);

            movieItem.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event bubbling
                addToWatchlist(movie, dropdown);
            });
        });
    } else {
        const noResults = document.createElement('div');
        noResults.textContent = 'No results found';
        applyStyles(noResults, styles.noResults.base);
        dropdown.appendChild(noResults);
    }
}

const handleWatchlistAddition = async (btn) => {
    
    if (isDropdownOpen) {
        return;
    }

    console.log('Add to watchlist btn clicked');
    const movieName = btn.getAttribute('data-moviename') === 'null' ? null : btn.getAttribute('data-moviename');
    const releaseYear = btn.getAttribute('data-releaseyear') === 'null' ? null : btn.getAttribute('data-releaseyear');
    const movieId = btn.getAttribute('data-movieid') === 'null' ? null : btn.getAttribute('data-movieid');

    // Show dropdown with loader immediately
    const dropdown = createMovieDropdown(btn);
    
    const data = await fetchMovieDetails(movieName, releaseYear, movieId);
    console.log(data, 'Data from API');

    // Update dropdown content
    updateDropdownContent(dropdown, data);
}

const createAddToWatchlistBtn = (movieName, releaseYear, movieId = null) => {
    const btn = document.createElement('button');
    btn.textContent = '+ Add to Watchlist';
    applyStyles(btn, styles.buttons.addToWatchlist.base);

    btn.addEventListener('mouseenter', () => {
        applyStyles(btn, styles.buttons.addToWatchlist.hover);
    });
    btn.addEventListener('mouseleave', () => {
        applyStyles(btn, styles.buttons.addToWatchlist.mouseLeave);
    });
    btn.setAttribute('data-moviename', movieName)
    btn.setAttribute('data-releaseyear', releaseYear);
    btn.setAttribute('data-movieid', movieId);

    btn.onclick = (event) => {
        handleWatchlistAddition(btn);
    };

    return btn;
}

// Check for Google movie title header
const checkAndAddBtnInGoogleMovieHeader = () => {
    const movieTitleElement = document.querySelector('.PZPZlf.ssJ7i'); // Replace with actual class name
    const releaseYearElement = document.querySelector('.nwVKo'); // Replace with actual class name
    const parentDiv = document.querySelector('.HdbW6.MjUjnf.VM6qJ');
    const releaseYear = releaseYearElement ? (releaseYearElement.textContent.match(/\b(1[0-9]{3}|2[0-9]{3})\b/g)?.[0] || '') : '';
    
    // Check if both elements are present, which indicates a movie is displayed
    if (movieTitleElement && releaseYearElement && parentDiv && releaseYear !== '') {
        const movieTitle = movieTitleElement.textContent.trim();

        parentDiv.style.height = '110px';

        const btn = createAddToWatchlistBtn(movieTitle, releaseYear);
        btn.style.left = '0';
        btn.style.right = 'auto';

        releaseYearElement.insertAdjacentElement('afterend', btn);

        // parentDiv.appendChild(btn);
        
        console.log("Movie found in heading", movieTitle)
        return {movieHeaderDetected: true, movieName: movieTitle, releaseYear}
    } else {
        return {movieHeaderDetected: false, movieName: null}
    }
}

const addBtnInSearchResults = () => {

    function removeYearSuffix(movieName) {
        // Match and remove "(year)", "(year text)", or "(film)" at the end of the string
        return movieName.replace(/\((\d{4}.*?|film)\)$/, '').trim();
    }

    function cleanTitleForNetflix(title) {
        return title.replace(/^Watch\s/, '').replace(/\s\|\sNetflix Official Site$/, '');
    }

    const searchResults = document.querySelectorAll('div.g'); // Adjust class if needed

    searchResults.forEach((result) => {
        const titleElement = result.querySelector('h3');
        const linkElement = result.querySelector('a');
        const url = linkElement.href;

        if (titleElement && linkElement) {
            if (isElementInDOMAndVisible(titleElement) && CONFIG.SPOTLIGHT_LINKS.filter(it => url.includes(it)).length > 0) {
                linkElement.style.position = 'relative';
                console.log('links found in search result', url)
                const imdbId = url.includes('imdb') ? url.split("/")[4] : null; // Extract the IMDb ID
                const titleElement = result.querySelector('h3');
                const movieName = url.includes('netflix') 
                                        ? cleanTitleForNetflix(result.querySelector('h3').textContent)
                                        : url.includes('wikipedia')
                                            ? removeYearSuffix(result.querySelector('h3').textContent)
                                            : result.querySelector('h3').textContent;

                const closestDiv = linkElement.closest('div');
                closestDiv.style.position = 'relative';

                const titleText = document.createElement('span');
                titleText.textContent = titleElement.textContent;
                applyStyles(titleText, styles.searchResultH3.titleText.base);
                
                applyStyles(titleElement, styles.searchResultH3.titleElement.base);

                titleElement.innerHTML = '';
                titleElement.appendChild(titleText);

                const btn = createAddToWatchlistBtn(movieName, null, imdbId);

                closestDiv.appendChild(btn);
            }
        } else {
            console.log('no imdb links found')
        }
    });
}


// Listen for messages from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "newGetRequest" || request.type === "pageLoaded") {

      const { movieHeaderDetected, movieName, releaseYear } = checkAndAddBtnInGoogleMovieHeader();
      addBtnInSearchResults();
      createStylesheet();
      
      // Always send a response
      sendResponse({ received: true });
    }
    return true; // Will respond asynchronously
  });

// Main execution logic
const { movieHeaderDetected, movieName, releaseYear } = checkAndAddBtnInGoogleMovieHeader();

addBtnInSearchResults();
createStylesheet();
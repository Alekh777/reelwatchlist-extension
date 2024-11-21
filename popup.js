const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('results');
const watchlistItemsContainer = document.getElementById('watchlistItems');

// Function to display search results
function displayResults(movies) {
    resultsContainer.innerHTML = '';
    if (movies.Response === "False") {
        resultsContainer.innerHTML = `<p>${movies.Error}</p>`;
        return;
    }
    movies.Search.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie-item';
        movieDiv.innerHTML = `
            <h3>${movie.Title} (${movie.Year})</h3>
            <button class="add-to-watchlist" data-title="${movie.Title}">Add to Watchlist</button>
        `;
        resultsContainer.appendChild(movieDiv);
    });

    // Add event listeners to add buttons
    const addButtons = document.querySelectorAll('.add-to-watchlist');
    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const title = e.target.getAttribute('data-title');
            addToWatchlist(title);
        });
    });
}

// Function to add movie to watchlist
function addToWatchlist(title) {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    if (!watchlist.includes(title)) {
        watchlist.push(title);
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
        loadWatchlist();
    } else {
        alert(`${title} is already in your watchlist!`);
    }
}

// Function to load watchlist from local storage
function loadWatchlist() {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    watchlistItemsContainer.innerHTML = '';
    watchlist.forEach(title => {
        const listItem = document.createElement('li');
        listItem.textContent = title;
        watchlistItemsContainer.appendChild(listItem);
    });
}

// Function to search for movies using the OMDB API
async function searchMovies(query) {
    const apiKey = "YOUR_OMDB_API_KEY"; // Replace with your OMDB API key
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`);
    const data = await response.json();
    displayResults(data);
}

// Event listener for search button
searchBtn.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        searchMovies(query);
    }
});

// Load watchlist on startup
loadWatchlist();

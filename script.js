// Database updated to feature movie lengths instead of release years
const moviesDatabase = [
    { title: "The Shawshank Redemption", length: "2h 22m", genre: "Drama", rating: "9.3" },
    { title: "The Godfather", length: "2h 55m", genre: "Crime, Drama", rating: "9.2" },
    { title: "The Dark Knight", length: "2h 32m", genre: "Action, Crime", rating: "9.0" },
    { title: "Pulp Fiction", length: "2h 34m", genre: "Crime, Drama", rating: "8.9" },
    { title: "The Lord of the Rings: The Return of the King", length: "3h 21m", genre: "Adventure, Drama", rating: "9.0" },
    { title: "Inception", length: "2h 28m", genre: "Action, Sci-Fi", rating: "8.8" },
    { title: "Fight Club", length: "2h 19m", genre: "Drama", rating: "8.8" },
    { title: "Forrest Gump", length: "2h 22m", genre: "Drama, Romance", rating: "8.8" },
    { title: "The Matrix", length: "2h 16m", genre: "Action, Sci-Fi", rating: "8.7" },
    { title: "Goodfellas", length: "2h 25m", genre: "Biography, Crime", rating: "8.7" },
    { title: "The Empire Strikes Back", length: "2h 04m", genre: "Action, Adventure", rating: "8.7" },
    { title: "Interstellar", length: "2h 49m", genre: "Adventure, Drama", rating: "8.7" },
    { title: "Seven", length: "2h 07m", genre: "Crime, Drama", rating: "8.6" },
    { title: "Spirited Away", length: "2h 05m", genre: "Animation, Adventure", rating: "8.6" },
    { title: "Saving Private Ryan", length: "2h 49m", genre: "Drama, War", rating: "8.6" },
    { title: "The Green Mile", length: "3h 09m", genre: "Crime, Drama", rating: "8.6" },
    { title: "Life Is Beautiful", length: "1h 56m", genre: "Comedy, Drama", rating: "8.6" },
    { title: "Parasite", length: "2h 12m", genre: "Drama, Thriller", rating: "8.5" },
    { title: "Léon: The Professional", length: "1h 50m", genre: "Action, Crime", rating: "8.5" },
    { title: "Gladiator", length: "2h 35m", genre: "Action, Adventure", rating: "8.5" },
    { title: "Back to the Future", length: "1h 56m", genre: "Adventure, Comedy", rating: "8.5" },
    { title: "The Lion King", length: "1h 28m", genre: "Animation, Adventure", rating: "8.5" },
    { title: "Whiplash", length: "1h 46m", genre: "Drama, Music", rating: "8.5" },
    { title: "The Prestige", length: "2h 10m", genre: "Drama, Mystery", rating: "8.5" },
    { title: "Psycho", length: "1h 49m", genre: "Horror, Mystery", rating: "8.5" },
    { title: "Casablanca", length: "1h 42m", genre: "Drama, Romance", rating: "8.5" },
    { title: "American History X", length: "1h 59m", genre: "Drama", rating: "8.5" },
    { title: "The Intouchables", length: "1h 52m", genre: "Biography, Comedy", rating: "8.5" },
    { title: "Modern Times", length: "1h 27m", genre: "Comedy, Drama", rating: "8.5" },
    { title: "Rear Window", length: "1h 52m", genre: "Mystery, Thriller", rating: "8.5" },
    { title: "City Lights", length: "1h 27m", genre: "Comedy, Drama", rating: "8.5" },
    { title: "The Departed", length: "2h 31m", genre: "Crime, Drama", rating: "8.5" },
    { title: "Terminator 2: Judgment Day", length: "2h 17m", genre: "Action, Sci-Fi", rating: "8.6" },
    { title: "Spider-Man: Into the Spider-Verse", length: "1h 57m", genre: "Animation, Action", rating: "8.4" },
    { title: "Avengers: Endgame", length: "3h 01m", genre: "Action, Adventure", rating: "8.4" },
    { title: "Joker", length: "2h 02m", genre: "Crime, Drama", rating: "8.4" },
    { title: "Django Unchained", length: "2h 45m", genre: "Drama, Western", rating: "8.4" },
    { title: "WALL-E", length: "1h 38m", genre: "Animation, Adventure", rating: "8.4" },
    { title: "Coco", length: "1h 45m", genre: "Animation, Family", rating: "8.4" },
    { title: "Spider-Man: No Way Home", length: "2h 28m", genre: "Action, Adventure", rating: "8.2" },
    { title: "Jurassic Park", length: "2h 07m", genre: "Action, Adventure", rating: "8.2" },
    { title: "Titanic", length: "3h 14m", genre: "Drama, Romance", rating: "7.9" },
    { title: "Avatar", length: "2h 42m", genre: "Action, Adventure", rating: "7.9" },
    { title: "The Silence of the Lambs", length: "1h 58m", genre: "Crime, Drama", rating: "8.6" },
    { title: "Raiders of the Lost Ark", length: "1h 55m", genre: "Action, Adventure", rating: "8.4" },
    { title: "Star Wars: A New Hope", length: "2h 01m", genre: "Action, Adventure", rating: "8.6" },
    { title: "Jaws", length: "2h 04m", genre: "Adventure, Thriller", rating: "8.1" },
    { title: "Alien", length: "1h 57m", genre: "Horror, Sci-Fi", rating: "8.5" },
    { title: "Blade Runner 2049", length: "2h 44m", genre: "Action, Drama", rating: "8.0" },
    { title: "Eternal Sunshine of the Spotless Mind", length: "1h 48m", genre: "Drama, Romance", rating: "8.3" },
    { title: "The Truman Show", length: "1h 43m", genre: "Comedy, Drama", rating: "8.1" },
    { title: "Monsters, Inc.", length: "1h 32m", genre: "Animation, Adventure", rating: "8.1" },
    { title: "Finding Nemo", length: "1h 40m", genre: "Animation, Adventure", rating: "8.2" },
    { title: "Shrek", length: "1h 30m", genre: "Animation, Adventure", rating: "7.9" },
    { title: "Toy Story", length: "1h 21m", genre: "Animation, Adventure", rating: "8.3" },
    { title: "Up", length: "1h 36m", genre: "Animation, Adventure", rating: "8.3" },
    { title: "Ratatouille", length: "1h 51m", genre: "Animation, Adventure", rating: "8.1" },
    { title: "Mad Max: Fury Road", length: "2h 00m", genre: "Action, Adventure", rating: "8.1" },
    { title: "No Country for Old Men", length: "2h 02m", genre: "Crime, Drama", rating: "8.2" },
    { title: "Dune: Part Two", length: "2h 46m", genre: "Action, Adventure", rating: "8.6" }
];

const genresList = ["All", "Action", "Adventure", "Animation", "Comedy", "Crime", "Drama", "Sci-Fi", "Thriller"];
let selectedGenre = "All";

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('results');
const genreContainer = document.getElementById('genreFilters');

createGenreButtons();
displayMovies(moviesDatabase);

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('input', performSearch);

function createGenreButtons() {
    genresList.forEach(genre => {
        const button = document.createElement('button');
        button.classList.add('genre-btn');
        button.textContent = genre;
        
        if (genre === "All") button.classList.add('active');

        button.addEventListener('click', () => {
            document.querySelectorAll('.genre-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            selectedGenre = genre;
            performSearch();
        });

        genreContainer.appendChild(button);
    });
}

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    const filteredMovies = moviesDatabase.filter(movie => {
        const matchesText = movie.title.toLowerCase().includes(searchTerm);
        const matchesGenre = selectedGenre === "All" || movie.genre.includes(selectedGenre);
        return matchesText && matchesGenre;
    });

    displayMovies(filteredMovies);
}

function displayMovies(movies) {
    resultsContainer.innerHTML = ''; 

    if (movies.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">No movies found matching that combination.</p>';
        return;
    }

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        
        const encodedTitle = encodeURIComponent(movie.title);
        const posterUrl = `https://placehold.co/220x280/1f1f2e/ffffff?text=${encodedTitle}`;

        // NEW: Changed 'Year' text node mapping to read the 'length' string parameter
        movieCard.innerHTML = `
            <img src="${posterUrl}" alt="${movie.title}">
            <div class="movie-details">
                <h3>${movie.title}</h3>
                <p><strong>Length:</strong> ${movie.length}</p>
                <p><strong>Genre:</strong> ${movie.genre}</p>
                <p class="rating-tag">★ ${movie.rating}</p>
            </div>
        `;
        
        resultsContainer.appendChild(movieCard);
    });
}
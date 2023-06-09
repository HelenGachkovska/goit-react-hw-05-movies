const APIKEY = 'a62f5be583049dd9d23498f3821d50e8';
const URL = 'https://api.themoviedb.org/3';

export function fetchTrendingMovies() {
  return fetch(`${URL}/trending/all/day?api_key=${APIKEY}`).then(response =>
    response.json()
  );
}

export function fetchMoviesDetals(movieId) {
  return fetch(`${URL}/movie/${movieId}?api_key=${APIKEY}`).then(response =>
    response.json()
  );
}

export function fetchMoviesCast(movieId) {
  return fetch(`${URL}/movie/${movieId}/credits?api_key=${APIKEY}`).then(response =>
    response.json()
  );
}

export function fetchMoviesReviews(movieId) {
  return fetch(`${URL}/movie/${movieId}/reviews?api_key=${APIKEY}`).then(response =>
    response.json()
  );
}

export function fetchSearchMovies(queryMovies) {
  return fetch(`${URL}/search/movie?api_key=${APIKEY}&query=${queryMovies}`).then(response =>
    response.json()
  );
}
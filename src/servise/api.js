const APIKEY = 'a62f5be583049dd9d23498f3821d50e8';
const URL = 'https://api.themoviedb.org/3';

export function fetchTrendingMovies() {
  return fetch(`${URL}/trending/all/day?api_key=${APIKEY}`).then(response =>
    response.json()
  );
}

export function fetchMoviesDetals(movieId) {
  return fetch(`${URL}/movie/${movieId}day?api_key=${APIKEY}`).then(response =>
    response.json()
  );
}

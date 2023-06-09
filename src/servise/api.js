const APIKEY = 'a62f5be583049dd9d23498f3821d50e8';
const URL = 'https://api.themoviedb.org/3';

export function fetchTrendingMovies() {
  try {
    return fetch(`${URL}/trending/all/day?api_key=${APIKEY}`).then(response =>
      response.json()
    );
  } catch (error) {
    throw new Error(error.message);
  }
}

export function fetchMoviesDetals(movieId) {
  try {
    return fetch(`${URL}/movie/${movieId}?api_key=${APIKEY}`).then(response =>
      response.json()
    );
  } catch (error) {
    throw new Error(error.message);
  }
}

export function fetchMoviesCast(movieId) {
  try {
    return fetch(`${URL}/movie/${movieId}/credits?api_key=${APIKEY}`).then(
      response => response.json()
    );
  } catch (error) {
    throw new Error(error.message);
  }
}

export function fetchMoviesReviews(movieId) {
  try {
    return fetch(`${URL}/movie/${movieId}/reviews?api_key=${APIKEY}`).then(
      response => response.json()
    );
  } catch (error) {
    throw new Error(error.message);
  }
}

export function fetchSearchMovies(queryMovies) {
  try {
    return fetch(
      `${URL}/search/movie?api_key=${APIKEY}&query=${queryMovies}`
    ).then(response => response.json());
  } catch (error) {
    throw new Error(error.message);
  }
}

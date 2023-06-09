import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { fetchMoviesDetals } from 'servise/api';
import PropTypes from 'prop-types';

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState('');
  const param = useParams();
  const movieId = param.movieId;
  const location = useLocation();
  const backLincLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    fetchMoviesDetals(movieId)
      .then(data => setMovieDetails(data))
      .catch(error => console.log(error));
  }, [movieId]);

  const { title, overview, genres, poster_path, name, vote_average } =
    movieDetails;

  if (!title && !name) {
    return (
      <>
        <Link to={backLincLocationRef.current}>Go back</Link>
        <p>Sorry, no movie information found</p>
      </>
    );
  }

  return (
    <>
      <Link to={backLincLocationRef.current}>Go back</Link>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      ></img>
      <h1>{title || name}</h1>
      <p>User score: {vote_average}%</p>
      <p>{overview}</p>
      <p>Genres: </p>
      {genres?.map(({ id, name }) => (
        <span key={id}>{`${name}, `}</span>
      ))}

      <Link to={'Cast'}>Cast</Link>
      <Link to={'Reviews'}>Reviews</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

MovieDetails.propTypes = {
  movieDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string.isRequired,
  }),

  genres: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default MovieDetails;

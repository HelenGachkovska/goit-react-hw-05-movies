import { useEffect, useRef, useState } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { fetchMoviesDetals } from 'servise/api';

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
  }, []);

  const { title, overview, genres, poster_path, name, vote_average } =
    movieDetails;

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
      <Outlet />
    </>
  );
}

export default MovieDetails;

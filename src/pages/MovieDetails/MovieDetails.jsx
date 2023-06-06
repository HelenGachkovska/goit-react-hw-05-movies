import { useEffect, useState } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { fetchMoviesDetals } from 'servise/api';

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState('');
  const param = useParams();
  const movieId = param.movieId;

  useEffect(() => {
    fetchMoviesDetals(movieId)
      .then(data => setMovieDetails(data))
      .catch(error => console.log(error));
  }, []);
  console.log(movieDetails);

  return (
    <>
     
      <Link to={'Cast'}>До Cast</Link>
      <Link to={'Reviews'}>До Reviews</Link>
      <Outlet />
    </>
  );
}

export default MovieDetails;

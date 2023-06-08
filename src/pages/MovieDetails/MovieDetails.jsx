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

   const { title, overview, genres, poster_path, name, vote_average } =
    movieDetails;

  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}  alt={title}></img>
      <h1>{title || name}</h1>
      <p>User score: {vote_average}%</p>
      <p>{overview}</p>
      <p>Genres: </p>
          {genres?.map(({ id, name }) => (
            <span key={id}>{`${name}, `}</span>
          ))}
      
     
      <Link to={'Cast'}>До Cast</Link>
      <Link to={'Reviews'}>До Reviews</Link>
      <Outlet />
    </>
  );
}

export default MovieDetails;

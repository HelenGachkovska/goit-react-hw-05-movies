import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMoviesDetals } from 'servise/api';
import PropTypes from 'prop-types';
import {
  ButtonLink,
  Container,
  MovieInfo,
  InfoBox,
  InfoLink,
  InfoItem,
  InfoList
} from './MovieDetails.styled';

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

  console.log(movieDetails);

  const { title, overview, genres, poster_path, name, vote_average } =
    movieDetails;

  // if (!title && !name) {
  //   return (
  //     <>
  //       <ButtonLink to={backLincLocationRef.current}>Go back</ButtonLink>
  //       <Suspense fallback={<div>Loading...</div>}>
  //         <Text>Sorry, no movie information found</Text>
  //         </Suspense>
  //     </>
  //   );
  // }

  return (
    <>
      <ButtonLink to={backLincLocationRef.current}>Go back</ButtonLink>
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width={320}
          height={380}
        ></img>

        <MovieInfo>
          <h1>{title || name}</h1>
          <h3>User score: {vote_average}%</h3>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres: </h3>
          {genres?.map(({ id, name }) => (
            <span key={id}>{`${name}, `}</span>
          ))}
        </MovieInfo>
      </Container>

      <InfoBox>
        <h4>Additional information</h4>
        <InfoList>
          <InfoItem>
            <InfoLink to={'Cast'}>Cast</InfoLink>
          </InfoItem>
          <InfoItem>
            <InfoLink to={'Reviews'}>Reviews</InfoLink>
          </InfoItem>
        </InfoList>
      </InfoBox>
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

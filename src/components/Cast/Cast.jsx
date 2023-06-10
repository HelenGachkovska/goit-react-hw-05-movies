import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCast } from 'servise/api';
import PropTypes from 'prop-types';
import { CastItem } from './Cast.styled';

function Cast() {
  const [castInfo, setCastInfo] = useState('');
  const param = useParams();
  const movieId = param.movieId;

  useEffect(() => {
    fetchMoviesCast(movieId)
      .then(data => setCastInfo(data))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul>
      {castInfo.cast?.map(
        ({ id, profile_path, original_name, character, popularity }) => (
          <CastItem key={id}>
            <img
              src={`https://www.themoviedb.org/t/p/w276_and_h350_face${profile_path}`}
              alt={original_name}
            />
            <div>
              <h2> {original_name}</h2>
              <p>Character: {character}</p>
              <p>Popularity: {popularity}</p>
            </div>
          </CastItem>
        )
      )}
    </ul>
  );
}

Cast.propTypes = {
  castInfo: PropTypes.shape({
    original_name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
    id: PropTypes.number.isRequired,
    popularity: PropTypes.number,
  }),
};

export default Cast;

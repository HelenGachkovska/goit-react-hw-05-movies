import { useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';
import {fetchMoviesCast} from 'servise/api'

function Cast() {
    const [castInfo, setCastInfo] = useState('');
    const param = useParams();
    const movieId = param.movieId;
    
    useEffect(() => {
    fetchMoviesCast(movieId)
      .then(data => setCastInfo(data))
      .catch(error => console.log(error));
  }, []);
    // console.log(castInfo);

    
    return <ul>
        {castInfo.cast?.map(
          ({ id, profile_path, original_name, character, popularity }) => (
            <li key={id}>
              <img
                src={`https://www.themoviedb.org/t/p/w276_and_h350_face${profile_path}`}
                alt={original_name}
              />
              <h2> {original_name}</h2>
              <p>Character: {character}</p>
              <p>Popularity: {popularity}</p>
            </li>
          )
        )}
      </ul>
}
export default Cast;
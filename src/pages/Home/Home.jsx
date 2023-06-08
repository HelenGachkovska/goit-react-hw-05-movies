import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'servise/api';

function Home() {
  const [moviesData, setMoviesData] = useState('');

  useEffect(() => {
    fetchTrendingMovies()
      .then(data => setMoviesData(data.results))
      .catch(error => console.log(error));
  }, []);

  // console.log('moviesData;', moviesData);

  return (
    <div>
      <ul>
        {moviesData &&
          moviesData.map(({ id, title, name }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title || name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Home;

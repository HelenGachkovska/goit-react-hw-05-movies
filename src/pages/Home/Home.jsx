import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'servise/api';

function Home() {
  const [moviesData, setMoviesData] = useState('');

  useEffect(() => {
    fetchTrendingMovies()
      .then(data => setMoviesData(data.results))
      .catch(error => console.log(error));
  }, []);

  console.log('moviesData;', moviesData);

  return (
    <div>
      <ul>
        {moviesData &&
          moviesData.map(({ id, title, name }) => <li key={id}>{title || name}</li>)}
      </ul>
    </div>
  );
}

export default Home;

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'servise/api';

function Home() {
  const [moviesData, setMoviesData] = useState([]);
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    fetchTrendingMovies()
      .then(data => setMoviesData(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <ul>
        {moviesData?.map(({ id, title, name }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>{title || name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Home;

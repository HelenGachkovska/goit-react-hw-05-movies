import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'servise/api';
import PropTypes from 'prop-types';
import { Item, ItemLink, Title } from './Home.styled';

function Home() {
  const [moviesData, setMoviesData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies()
      .then(data => setMoviesData(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      <ul>
        {moviesData?.map(({ id, title, name }) => (
          <Item key={id}>
            <ItemLink to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </ItemLink>
          </Item>
        ))}
      </ul>
    </div>
  );
}

Home.propTypes = {
  moviesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Home;

import { useState, useEffect, Suspense } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'servise/api';
import PropTypes from 'prop-types';

function Movies() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const queryMovies = searchParams.get('queryMovies') ?? '';
  const [firstName, setFirstName] = useState(queryMovies);

  const handlerSubmit = e => {
    e.preventDefault();
    setSearchParams({ queryMovies: e.currentTarget.elements.search.value });
  };

  useEffect(() => {
    if (queryMovies !== '') {
      fetchSearchMovies(queryMovies)
        .then(data => setSearchMovies(data.results))
        .catch(error => console.log(error));
    }
  }, [queryMovies]);

  return (
    <>
      <form type="submit" onSubmit={handlerSubmit}>
        <input
          type="text"
          name="search"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        ></input>
        <button>Search movie</button>
      </form>
      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          {searchMovies?.map(({ id, title, name }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title || name}
              </Link>
            </li>
          ))}
        </ul>
      </Suspense>
    </>
  );
}

Movies.propTypes = {
  searchMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Movies;

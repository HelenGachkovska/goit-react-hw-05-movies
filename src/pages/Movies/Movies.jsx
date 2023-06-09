import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'servise/api';

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
      <ul>
        {searchMovies?.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Movies;

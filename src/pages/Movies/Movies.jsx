import { useState, useEffect, Suspense } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'servise/api';
import PropTypes from 'prop-types';
import { SearchForm, SearchInput, Text, ItemLink, Item } from './Movies.styled';

function Movies() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const queryMovies = searchParams.get('queryMovies') ?? '';
  const [firstName, setFirstName] = useState(queryMovies);
  const [error, setError] = useState(false);

  const handlerSubmit = e => {
    e.preventDefault();
    setSearchParams({ queryMovies: e.currentTarget.elements.search.value });
  };

  useEffect(() => {
    if (queryMovies !== '') {
      fetchSearchMovies(queryMovies)
        .then(data => {
          if (!data.results.length) {
            setError(true);
            setSearchMovies([]);
            return;
          }
          setError(false);
          setSearchMovies(data.results);
        })
        .catch(error => console.log(error));
    }
  }, [queryMovies]);

  console.log(error);

  return (
    <>
      <SearchForm type="submit" onSubmit={handlerSubmit}>
        <SearchInput
          type="text"
          name="search"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder="Search movie..."
        ></SearchInput>
        <button>Search movie</button>
      </SearchForm>
      <Suspense fallback={<div>Loading...</div>}>
        {error && (
          <Text>There is no movies with this request. Please, try again</Text>
        )}
        <ul>
          {searchMovies?.map(({ id, title, name }) => (
            <Item key={id}>
              <ItemLink to={`/movies/${id}`} state={{ from: location }}>
                {title || name}
              </ItemLink>
            </Item>
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

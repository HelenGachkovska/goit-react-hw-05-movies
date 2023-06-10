import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'servise/api';
import PropTypes from 'prop-types';
import { RewievsItem } from './Reviews.styled';

function Reviews() {
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const param = useParams();
  const movieId = param.movieId;

  useEffect(() => {
    fetchMoviesReviews(movieId)
      .then(data => setReviewsInfo(data.results))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div>
      {reviewsInfo.length === 0 ? (
        <p>There are no reviews for this movie</p>
      ) : (
        <ul>
          {reviewsInfo?.map(({ id, author, content }) => (
            <RewievsItem key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </RewievsItem>
          ))}
        </ul>
      )}
    </div>
  );
}

Reviews.propTypes = {
  reviewsInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

export default Reviews;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'servise/api';

function Reviews() {
  const[reviewsInfo, setReviewsInfo] = useState([]);
  const param = useParams();
  const movieId = param.movieId;

  useEffect(() => {
    fetchMoviesReviews(movieId)
      .then(data => setReviewsInfo(data.results))
      .catch(error => console.log(error));
  }, []);

  console.log(reviewsInfo);

  return <div>
      {reviewsInfo.length === 0 ? (
        <p>
         There are no reviews for this movie
        </p>
      ) : (
        <ul>
          {reviewsInfo?.map(({ id, author, content }) => (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>;
}
export default Reviews;

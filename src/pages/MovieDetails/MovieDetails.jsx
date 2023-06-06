import { Outlet, Link } from "react-router-dom";


function MovieDetails() {
  return (
    <>
          <p>ДЕТАЛІ</p>
          <Link to={'Cast'}>До Cast</Link>
          <Link to={'Reviews'}>До Reviews</Link>
          <Outlet/>
    </>
  );
}

export default MovieDetails;

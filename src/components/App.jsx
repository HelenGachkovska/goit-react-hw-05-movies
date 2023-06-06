import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";


export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />          
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="Cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
        </Route>
          
        </Route>
     </Routes>
    </div>
  );
};

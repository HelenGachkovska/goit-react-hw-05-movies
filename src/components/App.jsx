import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

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
        <Route path="*" element={<h1>Page not found</h1>} />
     </Routes>
    </div>
  );
};

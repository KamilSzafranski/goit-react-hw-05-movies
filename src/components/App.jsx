import React, { Fragment, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("./Layout/Layout"));
const Movie = lazy(() => import("./Movie/Movie"));
const Cast = lazy(() => import("./Cast/Cast"));
const Review = lazy(() => import("./Review/Review"));
const Search = lazy(() => import("./Search/Search"));
const NotFound = lazy(() => import("./NotFound/NotFound"));
const Home = lazy(() => import("./Home/Home"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movie/:elementId" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
          <Route path="search" element={<Search />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

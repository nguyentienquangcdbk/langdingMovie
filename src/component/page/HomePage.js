import React from "react";
import { Fragment } from "react";
import MovieList from "../movie/MovieList";
import Banner from "../banner/Banner";
const HomePage = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <section className="movies-layout page-container-fluid mb-10">
        <h2 className="text-white text-3xl mb-5">Now playing</h2>
        <MovieList type="now_playing"></MovieList>
      </section>
      <section className="movies-layout page-container-fluid mb-10">
        <h2 className="text-white text-3xl mb-5">Top playing</h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout page-container-fluid mb-10">
        <h2 className="text-white text-3xl mb-5">Trending</h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;

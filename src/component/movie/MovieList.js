import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import MoiveCard from "./MoiveCard";
import useSWR from "swr";
import { fetcher } from "../../config";
import { useState } from "react";
import { useEffect } from "react";
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>
const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=933cdbeaca5c6cb0c8d851b0dea7d9f8`,
    fetcher
  );
  // console.log(error, "lôic");

  useEffect(() => {
    // console.log("hello -data :", data);
    data != null ? setMovies(data.results) : setMovies([]);
    // setMovies(data.results);
  }, [data]);
  // console.log(movies);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item, index) => (
            <SwiperSlide key={index}>
              <MoiveCard item={item}></MoiveCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;

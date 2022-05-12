import React from "react";
// import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import Button from "../button/Button";

const Banner = () => {
  const { data } = useSWR(
    tmdbAPI.getMovieList("upcoming"),
    // `https://api.themoviedb.org/3/movie/upcoming?api_key=933cdbeaca5c6cb0c8d851b0dea7d9f8`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <section className="banner h-[350px] page-container mb-20 overflow-hidden">
      <Swiper grabCursor="true" slidesPerView="auto">
        {movies.length > 0 &&
          movies.map((item, index) => (
            <SwiperSlide key={index}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  // const navigate = useNavigate();
  const { title, poster_path } = item;
  // console.log(item, "test1");
  return (
    <div className="w-full h-full rounded-lg relative">
      <img
        className=" w-full h-full object-cover rounded-xl object-top"
        // src={tmdbAPI.getImagesBanner(poster_path)}
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
      />
      <div className="absolute inset-0 bg-black opacity-75 rounded-lg bg-gradient-to-b from-black to-neutral-600"></div>
      <div className="content absolute left-5 bottom-5   text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="flex items-center gap-x-3 mb-5">
          <span className="py-2 px-4 border border-white rounded-lg">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-lg">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-lg">
            Adventure
          </span>
        </div>

        <Button className={`w-auto`}>Watch now</Button>
      </div>
    </div>
  );
}
export default Banner;

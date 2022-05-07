import React from "react";
import useSWR from "swr";
import { fetcher } from "../../config";
import MoiveCard from "../movie/MoiveCard";
// import Banner from "../banner/Banner";
import MovieList from "../movie/MovieList";

const MoviePage = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=933cdbeaca5c6cb0c8d851b0dea7d9f8`,
    fetcher
  );
  const moives = data?.results || [];
  return (
    <div className="py-10 page-container-fluid">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-slate-700 text-white  outline-none bg-transparent"
            placeholder="Type here to search...."
          />
        </div>
        <button className="bg-[#F62682] p-4 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {moives.length > 0 &&
          moives.map((item, index) => (
            <MoiveCard key={index} item={item}></MoiveCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;

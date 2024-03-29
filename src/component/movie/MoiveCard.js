import React from "react";
import { useNavigate } from "react-router-dom";
import { tmdbAPI } from "../../config";
import Button from "../button/Button";

const MoiveCard = ({ item }) => {
  const { poster_path, original_title, release_date, vote_average, id } = item;
  // console.log(item);
  const navigate = useNavigate();
  return (
    <div className="movie-card flex flex-col h-full rounded-lg p-3 bg-slate-800 select-none">
      <img
        className="w-full h-full h-[250px] mb-5"
        src={tmdbAPI.getImages(poster_path)}
        alt=""
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-white text-2xl mb-3">{original_title}</h3>
        <div className="flex justify-between items-center text-white text-sm opacity-50 mb-5">
          <span className="">{release_date}</span>
          <span>{vote_average}</span>
        </div>
        <Button bgColor="secondary" onclick={() => navigate(`/movies/${id}`)}>
          👉 Watch now 2
        </Button>
        {/* <button
          onClick={() => Navigate(`/movies/${id}`)}
          className="px-6 py-3 mt-auto bg-[#F62682] text-white rounded-lg w-full hover:bg-pink-500"
        >
          Watch Now
        </button> */}
      </div>
    </div>
  );
};

export default MoiveCard;

import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../../config";

const MovieDetail = () => {
  const param = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${param.movieId}?api_key=933cdbeaca5c6cb0c8d851b0dea7d9f8`,
    fetcher
  );
  if (!data) return null;
  const { poster_path, backdrop_path, original_title, genres, overview } = data;
  console.log("chi tiets ", data);
  return (
    <div className="pb-10">
      <div className="w-full relative h-[600px] overflow-hidden ">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
          }}
        ></div>
      </div>
      <div className="w-full w-[800px] mx-auto relative -my-[200px] mb-10 h-[400px] rounded-lg overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <h2 className="text-white text-center text-3xl font-bold mb-10">
        {original_title}
      </h2>
      {genres.length > 0 && (
        <div className="flex items-center justify-center mb-10">
          {genres.map((item, index) => (
            <span
              key={index}
              className="mx-2 text-primary border border-primary py-2 px-4   rounded-3xl"
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-white text-center max-w-[600px] mx-auto mb-10">
        {overview}
      </p>

      <MovieCredits></MovieCredits>
      <MovieVideo></MovieVideo>
    </div>
  );
};
function MovieCredits() {
  const param = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${param.movieId}/credits?api_key=933cdbeaca5c6cb0c8d851b0dea7d9f8`,
    fetcher
  );
  if (!data) return null;
  const { cast } = data;

  return (
    <>
      <h2 className="text-center text-3xl text-red-300 mb-10">Cats</h2>
      <div className="grid grid-cols-4 gap-10">
        {cast.slice(0, 4).map((item, index) => (
          <div key={index} className="cast-item">
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
              className="w-full h-[300px] object-cover rounded-lg"
              alt=""
            />
            <h3 className="text-white text-xl text-center mt-4">{item.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

function MovieVideo() {
  const param = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${param.movieId}/videos?api_key=933cdbeaca5c6cb0c8d851b0dea7d9f8`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  console.log("video", data);
  return (
    <div className="py-10">
      <div className="grid grid-col gap-5">
        {results.slice(0, 2).map((item, index) => (
          <div key={index}>
            <h3 className="text-white mb-5 text-xl font-medium bg-secondary p-3 inline-block">
              {item.name}
            </h3>
            <div className="w-full aspect-video">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${item.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MovieDetail;

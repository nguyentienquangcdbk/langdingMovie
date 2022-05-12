export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apure = "933cdbeaca5c6cb0c8d851b0dea7d9f8";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
  //https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apure}`,
  getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apure}`,
  getMovieMeta: (movieId, type) =>
    `${tmdbEndpoint}/${movieId}/${type}?api_key=${apure}`,
  getImages: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
  getImagesBanner: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};

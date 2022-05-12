import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import useSWR from "swr";
import { fetcher } from "../../config";
import useDebounce from "../../hook/useDebounce";
import MoiveCard from "../movie/MoiveCard";
// import Banner from "../banner/Banner";
// import MovieList from "../movie/MovieList";

const itemsPerPage = 20;

const MoviePage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState();
  const filterDeboun = useDebounce(filter, 500);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=933cdbeaca5c6cb0c8d851b0dea7d9f8&page=${nextPage}`
  );
  useEffect(() => {
    if (filterDeboun) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=933cdbeaca5c6cb0c8d851b0dea7d9f8&query=${filterDeboun}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=933cdbeaca5c6cb0c8d851b0dea7d9f8&page=${nextPage}`
      );
    }
  }, [filterDeboun, nextPage]);

  const { data, error } = useSWR(url, fetcher);
  const loading = !data && error;
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const moives = data?.results || [];
  useEffect(() => {
    if (!data || !data.total_results) return;

    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;

    setNextPage(event.selected + 1);
    setItemOffset(newOffset);
  };
  return (
    <div className="py-10 page-container-fluid">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 bg-slate-600 text-white  outline-none bg-transparent"
            placeholder="Type here to search...."
            onChange={handleFilterChange}
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

      {loading && (
        <div className="border-4 w-10 h-10 rounded-full border-primary border-t-transparent animate-spin mx-auto mb-10 "></div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading &&
          moives.length > 0 &&
          moives.map((item, index) => (
            <MoiveCard key={index} item={item}></MoiveCard>
          ))}
      </div>

      <div className="mt-10 text-white">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pangination"
        />
      </div>
    </div>
  );
};

export default MoviePage;

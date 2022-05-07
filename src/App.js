import { Fragment } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Main from "./component/layout/Main";
import HomePage from "./component/page/HomePage";
// import { Link } from "react-router-dom";

// import MoiveCard from "./component/movie/MoiveCard";
import "swiper/scss";
import MoviePage from "./component/page/MoviePage";
import MovieDetail from "./component/page/MovieDetail";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movies/:movieId"
            element={<MovieDetail></MovieDetail>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;

import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((store) => store.movies.trendingMovies);

  const getTrendingMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    if (!trendingMovies) {
      getTrendingMovies();
    }
  }, [getTrendingMovies, trendingMovies]);
};

export default useTrendingMovies;

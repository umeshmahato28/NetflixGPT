import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect, useCallback } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterdata = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterdata.length ? filterdata[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  }, [dispatch, movieId]);

  useEffect(() => {
    getMovieVideos();
  }, [getMovieVideos]);

  // Note: You should return any cleanup function if needed
};

export default useMovieTrailer;

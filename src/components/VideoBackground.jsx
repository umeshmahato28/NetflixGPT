import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-full pt-5 md:pt-0">
      {trailerVideo && (
        <iframe
        //Trailer Video 
          className="w-full aspect-video "
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=0&mute=1&loop=1&playlist=${trailerVideo.key}&controls=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;

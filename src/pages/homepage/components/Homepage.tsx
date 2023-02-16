import React from "react";
import { MovieType } from "../../../domain/movie/MovieModels";
import { Movie } from "./Movie";
import { useState, useEffect } from "react";
import { getMoviesAll } from "../../../domain/movie/MovieApi";

export const Homepage = () => {
  const [movies, setMovies] = useState<MovieType[] | void>([]);

  const axiosData = async () => {
    const res = await getMoviesAll();
    console.log(res)
    
    setMovies(res);
  };
  useEffect(() => {
    axiosData();
  }, []);

  return (
    <div>
      {movies?.map((movie: MovieType) => (
        <div key={movie.id}>
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
        </div>
      ))}
    </div>
  );
};

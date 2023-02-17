import React from "react";
import { MovieType } from "../../../domain/movie/MovieModels";
import { Movie } from "./Movie";
import { useState, useEffect } from "react";
import { getMoviesAll } from "../../../domain/movie/MovieApi";
import "./Homepage.css";

export const Homepage = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  const axiosData = async () => {
    const res = await getMoviesAll();
    console.log(res);

    if(res != null) {
        setMovies(res);
    }
  };
  useEffect(() => {
    axiosData();
  }, []);

  return (
    <div className="movieGrid">
      {movies?.map((item) => (
        <div key= {item.id}> 
        <Movie movie={item} />
        </div>
      ))}
    </div>
  );
};

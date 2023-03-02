import React from "react";

import { MovieType, MovieDetailType } from "./MovieModels";

// axios
import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY

export const getMoviesAll = async () => {
  console.log(apiKey);
  
    
  const allMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR`;

  return axios
    .get<{ results: MovieType[] }>(allMoviesURL)
    .then((response) => response.data.results)
    .catch((error) => {
      console.log(error);
    });
};

export const getMovieDetail = async (id: string) => {
  const MovieURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=fr-FR`;

  return axios
    .get(MovieURL)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};

import React from "react";
import { MovieType, MovieDetailType } from "./MovieModels";
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

export const getMovieDetail = async (id: number) => {
  const MovieURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=fr-FR`;

  return axios
    .get<{ results: MovieDetailType[] }>(MovieURL)
    .then((response) => response.data.results)
    .catch((error) => {
      console.log(error);
    });
};

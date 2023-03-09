import React from "react";

import { MovieType } from "./MovieModels";

import axios from "axios";

export const apiKey = process.env.REACT_APP_API_KEY;

export const getMoviesAll = async (
  page_id: string = "1",
  genre_id?: string
) => {
  const allMoviesURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&sort_by=popularity.desc&page=${page_id}&with_genres=${genre_id}`;

  return axios
    .get<{ results: MovieType[] }>(allMoviesURL)
    .then((response) => {
      console.log(response);
      return response.data.results;
    })
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

export const searchMovie = async (query: string) => {
  const searchMovieURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=fr-FR&query=${query}`;
  return axios
    .get<{ results: MovieType[] }>(searchMovieURL)
    .then((response) => response.data.results)
    .catch((error) => {
      console.log(error);
    });
};

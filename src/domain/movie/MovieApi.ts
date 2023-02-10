import React from 'react';
import { MovieType, MovieDetailType } from './MovieModels';
import axios from 'axios';

const apiKey = process.env.API_KEY

export const getMoviesAll  = async () => {
    const allMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR`

    return axios.get<{results: MovieType[]}>(allMoviesURL).then((response) => response.data.results)
}

export const getMovieDetail =  async (id: number) => {
    const MovieURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=fr-FR`

    return axios.get<{results: MovieDetailType[]}>(MovieURL).then((response) => response.data.results)
}
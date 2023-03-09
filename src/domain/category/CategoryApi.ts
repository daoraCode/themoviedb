import axios from "axios";
import { apiKey } from "../movie/MovieApi";
import { CategoryType } from "./CategoryType";

export const getCategories = async () => {
  const apiUrlGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=fr-FR`;
  return axios
    .get<{ genres: CategoryType[] }>(apiUrlGenres)
    .then((response) => response.data.genres)
    .catch((err) => console.error(err));
};

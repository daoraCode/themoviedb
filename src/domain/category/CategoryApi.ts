// required dependencies
import axios from "axios";
import { CategoryType } from "./CategoryType";

const apiKey = process.env.API_KEY
// async function
export const getMovieCategories = async () => {
    const apiUrlGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=fr-FR`
    return axios.get<{results: CategoryType[]}>(apiUrlGenres)
                .then((response) => response.data.results)
}
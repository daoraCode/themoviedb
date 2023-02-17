// required dependencies
import axios from "axios";
import { CategoryType } from "./CategoryType";

const apiKey = process.env.REACT_APP_API_KEY
// async function
export const getMovieCategories = async () => {
    const apiUrlGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=fr-FR`
    return axios.get<{genres: CategoryType[]}>(apiUrlGenres)
                .then((response) => response.data.genres)
                .catch(err => console.error(err))
}
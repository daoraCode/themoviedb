// required dependencies
import axios from "axios";
import { CategoryType } from "./CategoryType";


// async function
export const getMovieCategories = async () => {
    const apiUrlGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
    return axios.get<{results: CategoryType[]}>(apiUrlGenres)
                .then((response) => response.data.results)
}
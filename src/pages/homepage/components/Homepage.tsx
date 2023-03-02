import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

// components
import { CategoriesList } from "./CategoriesList";
import { Movie } from "./Movie";

// api
import { getMoviesAll } from "../../../domain/movie/MovieApi";
import "./Homepage.css";

// models
import { MovieType } from "../../../domain/movie/MovieModels";
import { CategoryType } from "../../../domain/category/CategoryType";
import { getMovieCategories } from "../../../domain/category/CategoryApi";

export const Homepage = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const axiosData = async () => {
    const res = await getMoviesAll();

    if (res != null) {
        setMovies(res);
    }
  };

  const axiosCategoriesData = async () => {
    const res = await getMovieCategories();
    
    if(res != null) setCategories(res)
  }

  useEffect(() => {
    axiosData();
    axiosCategoriesData();
  }, []);

  return (
    <div>
      <CategoriesList categories={categories}/> 
      <div className="movieGrid">
        {movies?.map((item) => (
          <Link to={`/detail/${item.id}`}>
            <div key= {item.id}> 
              <Movie movie={item} />
            </div>
          </Link>
        ))}
        </div>
    </div>
  )
};

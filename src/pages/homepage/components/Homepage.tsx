import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CategoriesList } from "./CategoriesList";
import { Movie } from "./Movie";
import { Banner } from "./Banner";
import { getMoviesAll } from "../../../domain/movie/MovieApi";
import "./Homepage.css";
import { MovieType } from "../../../domain/movie/MovieModels";
import { CategoryType } from "../../../domain/category/CategoryType";
import { getMovieCategories } from "../../../domain/category/CategoryApi";

export const Homepage = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const axiosData = async () => {
    const res = await getMoviesAll("");

    if (res != null) setMovies(res);
  };

  const axiosCategoriesData = async () => {
    const res = await getMovieCategories();

    if (res != null) setCategories(res);
  };

  useEffect(() => {
    axiosData();
    axiosCategoriesData();
  }, []);

  const handleGenreClick = async (genre_id: string) => {
    const res = await getMoviesAll(genre_id);

    if (res != null) setMovies(res);
  };

  return (
    <div className="main-grid">
      <Banner />
      <CategoriesList
        categories={categories}
        handleGenreClick={handleGenreClick}
      />
      <div className="grid-item">
        <div className="movieGrid">
          {movies?.map((item) => (
            <Link className="movie_link" to={`/detail/${item.id}`}>
              <div key={item.id}>
                <Movie movie={item} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

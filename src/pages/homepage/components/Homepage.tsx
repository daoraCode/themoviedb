import React, { useState, useEffect } from "react";
import { CategoriesList } from "./CategoriesList";
import { SearchBar } from "./SearchBar";
import { getMoviesAll } from "../../../domain/movie/MovieApi";
import "./Homepage.css";
import { MovieType } from "../../../domain/movie/MovieModels";
import { CategoryType } from "../../../domain/category/CategoryType";
import { getCategories } from "../../../domain/category/CategoryApi";
import { PageData } from "../../../domain/page/PageData";
import { ButtonPageList } from "./ButtonPageList";
import { MoviesList } from "./MoviesList";

export const Homepage = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const movieApi = async () => {
    const res = await getMoviesAll("1", "");

    if (res != null) setMovies(res);
  };

  const categoryApi = async () => {
    const res = await getCategories();

    if (res != null) setCategories(res);
  };

  useEffect(() => {
    movieApi();
    categoryApi();
  }, []);

  const handleGenreClick = async (genre_id: string) => {
    const res = await getMoviesAll("1", genre_id);

    if (res != null) setMovies(res);
  };

  const handlePageClick = async (page_id: string) => {
    const res = await getMoviesAll(page_id);

    if (res != null) setMovies(res);
  };

  return (
    <>
      <SearchBar />
      <div className="main-grid">
      <CategoriesList
        categories={categories}
        handleGenreClick={handleGenreClick}
      />
      <MoviesList movies={movies}/>
      <ButtonPageList pages={PageData} handlePageClick={handlePageClick} />
      </div>
    </>
  );
};

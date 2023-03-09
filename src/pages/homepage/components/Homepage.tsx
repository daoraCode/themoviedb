import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CategoriesList } from "./CategoriesList";
import { Movie } from "./Movie";
import { SearchBar } from "./SearchBar";
import { getMoviesAll } from "../../../domain/movie/MovieApi";
import "./Homepage.css";
import { MovieType } from "../../../domain/movie/MovieModels";
import { CategoryType } from "../../../domain/category/CategoryType";
import { getCategories } from "../../../domain/category/CategoryApi";
import { PageData } from "../../../domain/page/PageData";
import { ButtonPageList } from "./ButtonPageList";

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
    <div className="main-grid">
      <SearchBar />
      <CategoriesList
        categories={categories}
        handleGenreClick={handleGenreClick}
      />
      <div className="grid-item">
        <div className="movieGrid">
          {movies?.map((item) => (
            <Link
              className="movie_link"
              key={item.id}
              to={`/detail/${item.id}`}
            >
              <Movie movie={item} />
            </Link>
          ))}
        </div>
          <ButtonPageList pages={PageData} handlePageClick={handlePageClick} />
      </div>
    </div>
  );
};

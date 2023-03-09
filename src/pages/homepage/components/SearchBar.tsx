import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";
import { searchMovie } from "../../../domain/movie/MovieApi";
import banner_img from "../../../images/movie-banner.png";
import { MovieType } from "../../../domain/movie/MovieModels";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<MovieType[]>([]);

  const searchMovies = async () => {
    const res = await searchMovie(query);
    if (res != null) setMovies(res);
  };

  useEffect(() => {
    searchMovies();
  }, [query]);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setQuery(event.target.value);
    const res = await searchMovie(query);
    if (res != null) setMovies(res);
  };

  return (
    <div>
      <img
        loading="lazy"
        className="banner"
        src={banner_img}
        alt="Official Movies Poster Banner"
      />
      <div className="dropdown-container">
        <div className="dropdown">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Recherche de films"
          />
        </div>
        <div className="movies">
          {movies.map((movie) => (
            <Link to={`/detail/${movie.id}`}>
              <div key={movie.id} className="movie">
                <img
                  className="imgSearch"
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3 className="titleSearch">{movie.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { MovieType } from "../../../domain/movie/MovieModels";
import { Movie } from "./Movie";
import { Link } from "react-router-dom";
import "./MoviesList.css"
import { SearchBar } from "./SearchBar";

type MovieListProps = {
  movies: MovieType[];
};

export const MoviesList = ({ movies }: MovieListProps) => {
  return (
    <div className="grid-item">
      <div className="movieGrid">
        {movies?.map((item) => (
          <Link className="movie_link" key={item.id} to={`/detail/${item.id}`}>
            <Movie movie={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

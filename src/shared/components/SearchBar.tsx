import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchBar.css";
import { Link } from "react-router-dom";

export const apiKey = process.env.REACT_APP_API_KEY;


type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
};

export const SearchBar = () => {
  
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState<Movie[]>([]);

  const BASE_URL = "https://api.themoviedb.org/3";

  const searchMovies = async () => {
    const url = `${BASE_URL}/search/movie?api_key=${apiKey}&query=${query}`;

    try {
      const response = await axios.get(url);
      const data = response.data;

      setMovies(data.results);

    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
      searchMovies();
    
  }, [query]);



  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setQuery(event.target.value);
  };


  return (
    <div className="dropdown">
      <input type="text" value={query} onChange={handleChange} placeholder="Recherche de films"/>
      <div className="movies">
        {movies.map((movie) => (
          <Link to={`/detail/${movie.id}`}>
            <div key={movie.id} className="movie">
              <img className="imgSearch" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
              <h3 className="titleSearch">{movie.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;



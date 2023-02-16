import React from 'react';
import { MovieType } from '../../../domain/movie/MovieModels';

type MovieProps = {
    movie: MovieType;
};

export const Movie = ({movie}: MovieProps) => {
    return (
        <div>
           <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt='poster'/>
            <h1>{movie.title}</h1>
        </div>
    )
}



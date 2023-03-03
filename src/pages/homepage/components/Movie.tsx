import React from 'react';
import { MovieType } from '../../../domain/movie/MovieModels';
import "./Movie.css"

type MovieProps = {
    movie: MovieType;
};

export const Movie = ({movie}: MovieProps) => {
    return (
        <main className='containerCards'>
            <div className='movieCard'>
            <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt='poster'/>
                <p className="titleMovie">{movie.title}</p>
            </div>
        </main>
    )
}



import React from 'react';

export interface MovieType {
    id: number;
    title: string;
    poster_path: string;
}

export interface MovieDetailType {
    id: number;
    title: string;
    posterUrl: string;
    overview: string;
    categories: object[];
    releaseDate : string;
    voteAverage: number;
}

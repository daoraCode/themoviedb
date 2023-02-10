import React from 'react';

export interface MovieType {
    id: number;
    title: string;
    posterUrl: string;
}

export interface MovieDetailsType {
    id: number;
    title: string;
    posterUrl: string;
    overview: string;
    categories: object[];
    releaseDate : string;
    voteAverage: number;
}

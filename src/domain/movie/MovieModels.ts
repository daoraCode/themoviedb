import React from 'react';

export interface MovieType {
  id: number;
  title: string;
  poster_path: string;
}

export interface MovieDetailType {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  release_date: string;
  vote_average: number;
}

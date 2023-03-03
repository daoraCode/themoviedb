import React, { useState, useEffect } from 'react';
import "./Detail.css"

import { useParams } from "react-router-dom"

import { getMovieDetail } from "../../domain/movie/MovieApi"
import { MovieDetailType } from "../../domain/movie/MovieModels"

export const Detail = () => {
  const { idMovieDetail } = useParams()
  const [movieDetail, setMovieDetail] = useState<MovieDetailType | null>(null)

  const axiosDetailData = async () => {
    const res = await getMovieDetail(String(idMovieDetail))

    if (res != null) {
      setMovieDetail(res);
    } 
  };

  useEffect(() => {
    axiosDetailData();
  }, [])

  return (
    <>
      {
        movieDetail == null 
          ?  
        <h2>Loading...</h2> 
          : 
        <div className='detail' key={movieDetail.id}>
          <h2>{movieDetail.title}</h2>
          <img className="" src={"https://image.tmdb.org/t/p/w500" + movieDetail.poster_path} alt='poster'/>
          <div className='info'>
            <div>
              <h4>Date de sortie:</h4>
              <p>{movieDetail.release_date}</p>
            </div>
            <div>
              <h4>Note:</h4>
              <p>{movieDetail.vote_average}</p>
            </div>
          </div>
          <div>
            <h3>Synopsis:</h3>
            <p>{movieDetail.overview}</p>
            <div className='genre'>
              <h4>Genre: </h4>
              {movieDetail.genres.map((el, key) => (
                <div key={el.id}>
                  
                  <p>{el.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </>
  )
}

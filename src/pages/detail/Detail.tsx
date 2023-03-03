import React, { useState, useEffect } from 'react'

// react-router-dom
import { useParams } from "react-router-dom"

// domain
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
        <div key={movieDetail.id}>
          <h2>{movieDetail.title}</h2>
          <img className="" src={"https://image.tmdb.org/t/p/w500" + movieDetail.poster_path} alt='poster'/>
          <div className="">
            <p>{movieDetail.overview}</p>
            <p>{movieDetail.release_date}</p>
            <div>
              {movieDetail.genres.map((el, key) => (
                <div key={el.id}>
                  <p>{el.name}</p>
                </div>
              ))}
            </div>
            <p>{movieDetail.vote_average}</p>
          </div>
        </div>
      }
    </>
  )
}

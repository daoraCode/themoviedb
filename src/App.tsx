import React, { useState, useEffect } from 'react';

import axios from "axios";


interface Props {}

const App = (props: Props) => {

  const [data, setData] = useState([])
  const api_key = 'd14382c5a44b7e8dda1bce4d97804f6e';
  
  // hooks
  const fetchMovieCategoryData = () => {
    
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=us-US`)
    .then((res) => {
      console.log(res.data)
      setData(res.data.genres)
    })
    .catch((error) => console.log(error))
    };

    useEffect(() => {
      fetchMovieCategoryData();
    }, []);  

  return (
    <div>
    {data.map((element: any) => {
        return (
          <div key={element.id}>
            <p>{element.name}</p>
            <p>{element.id}</p>
          </div>
        );
      })}
    </div>
    )
}

export default App;

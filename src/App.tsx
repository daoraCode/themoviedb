import React from 'react';
import './App.css';
import { getMoviesAll } from './domain/movie/MovieApi';
import { Homepage } from './pages/homepage/components/Homepage';
import { Header } from './shared/components/Header';

import { Detail } from "./pages/detail/Detail";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/detail/:idMovieDetail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
    </div>
    )
}

export default App;

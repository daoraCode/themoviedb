import React from 'react';
import './App.css';
import { getMoviesAll } from './domain/movie/MovieApi';
import { Header } from './shared/components/Header';

export const App = () => {
  return (
    <div className="App">
      <Header/>
    </div>
    )
}

export default App;

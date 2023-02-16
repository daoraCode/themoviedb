import React from 'react';
import './App.css';
import { getMoviesAll } from './domain/movie/MovieApi';
import { Homepage } from './pages/homepage/components/Homepage';
import { Header } from './shared/components/Header';

export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
    </div>
    )
}

export default App;

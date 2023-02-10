import React from 'react';
import './App.css';
import { getMoviesAll } from './domain/movie/MovieApi';
import { Header } from './shared/components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;

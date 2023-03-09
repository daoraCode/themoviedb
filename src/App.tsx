import React from 'react';
import './App.css';
import { Homepage } from './pages/homepage/components/Homepage';
import { Header } from './shared/components/Header';
import SearchBar from "./shared/components/SearchBar";
import { Detail } from "./pages/detail/Detail";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SearchBar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/detail/:idMovieDetail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

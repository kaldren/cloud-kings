import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Feed from './components/Feed';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

import './App.css';

// Components

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <SearchBar />
        <Feed />
      </BrowserRouter>
    </div>
  );
}

export default App;

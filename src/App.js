import React from 'react';

import Feed from './components/Feed';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

import './App.css';
import Layout from './components/Layout';

// Components

function App() {
  return (
      <div id="app">
        <SearchBar />
        <Feed />
      </div>
  );
}

export default App;

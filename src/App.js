import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';

// Components
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="app">
        <Header />
        <SearchBar />
        <Feed />
    </div>
  );
}

export default App;

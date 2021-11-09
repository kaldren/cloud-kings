import React from 'react';
import './App.css';
import Header from './components/Header';

// Components
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="app">
        <Header />
        <SearchBar />
    </div>
  );
}

export default App;

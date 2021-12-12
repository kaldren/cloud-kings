import React, { useState, useEffect } from 'react';
import './SearchBar.css'

// Icons
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";


function SearchBar() {

    let navigate = useNavigate();
    const[searchText, setSearchText] = useState('');

    const handleSearchText = (e) => {
        setSearchText(e.target.value);
    }

    return (
        <div id="searchBar">
            <SearchIcon className="icon-search" />
            <input type="text" className="searchBar__input" onChange={handleSearchText} />
            <button className="searchBar__searchButton" onClick={search}>Search</button>
        </div>
    )

    
    function search() {

        if (searchText !== '') {
            navigate(`/search?q=${searchText}`, { replace: true });
        }
    }
}


export default SearchBar

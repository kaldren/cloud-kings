import React from 'react'
import "./SearchBar.css"

// Icons
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    return (
        <div id="searchBar">
            <SearchIcon className="icon-search" />
            <input type="text" className="searchBar__input" />
        </div>
    )
}

export default SearchBar

import React from 'react'
import './Header.css'
import AppSettings from '../appSettings';

function Header() {
    return (
        <header id="headerTop">
            <h1 className="headerTop__appName">{AppSettings.APP_NAME}</h1>
        </header>
    )
}

export default Header

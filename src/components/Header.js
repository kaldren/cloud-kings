import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// Custom
import './Header.css'
import AppSettings from '../appSettings';
import {isAuthenticated, getUserData} from '../auth'
import HeaderAuthenticated from './HeaderAuthenticated';
import HeaderNotAuthenticated from './HeaderNotAuthenticated';


function Header() {

    const [authenticated, setAuthenticated] = useState(isAuthenticated());

    useEffect(() => {
        setAuthenticated(isAuthenticated());
    }, [])

    return (
        <header id='headerTop'>
            <div className='headerTop__inner'>
                <h1 className='headerTop__appName'>
                    <Link to='/'>{AppSettings.APP_NAME}</Link>
                </h1>
                <nav className='headerTop__navigation'>
                    {authenticated === true ? <HeaderAuthenticated user={getUserData()} /> : <HeaderNotAuthenticated />}
                </nav>
            </div>
        </header>
    )
}

export default Header

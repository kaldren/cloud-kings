import React from 'react'
import { Link } from "react-router-dom";

// Custom
import './Header.css'
import AppSettings from '../appSettings';
import {isAuthenticated, getUserData} from '../auth'
import HeaderAuthenticated from './HeaderAuthenticated';
import HeaderNotAuthenticated from './HeaderNotAuthenticated';


function Header() {
    return (
        <header id='headerTop'>
            <div className='headerTop__inner'>
                <h1 className='headerTop__appName'>
                    <Link to='/'>{AppSettings.APP_NAME}</Link>
                </h1>
                <nav className='headerTop__navigation'>
                    {isAuthenticated() === true ? <HeaderAuthenticated user={getUserData()} /> : <HeaderNotAuthenticated />}
                </nav>
            </div>
        </header>
    )
}

export default Header

import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

import './Header.css'
import AppSettings from '../appSettings';
import HeaderMenuButton from './HeaderMenuButton';

import LoginIcon from '@mui/icons-material/Login';

function Header() {
    return (
        <header id='headerTop'>
            <div className='headerTop__inner'>
                <h1 className='headerTop__appName'>
                    <Link to='/'>{AppSettings.APP_NAME}</Link>
                </h1>
                <nav className='headerTop__navigation'>
                    <HeaderMenuButton title='Home' />
                    <HeaderMenuButton title='About' />
                    <HeaderMenuButton title='Other' />
                    <HeaderMenuButton title='Login' Icon={LoginIcon} />
                </nav>
            </div>
        </header>
    )
}

export default Header

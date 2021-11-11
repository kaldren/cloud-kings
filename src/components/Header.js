import React from 'react'
import './Header.css'
import AppSettings from '../appSettings';
import HeaderMenuButton from './HeaderMenuButton';

import LoginIcon from '@mui/icons-material/Login';

function Header() {
    return (
        <header id='headerTop'>
            <h1 className='headerTop__appName'>{AppSettings.APP_NAME}</h1>
            <nav className='headerTop__navigation'>
                <HeaderMenuButton title='Home' />
                <HeaderMenuButton title='About' />
                <HeaderMenuButton title='Other' />
                <HeaderMenuButton title='Login' Icon={LoginIcon} />
            </nav>
        </header>
    )
}

export default Header

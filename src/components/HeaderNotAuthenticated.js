import React from 'react'
import PersonIcon from '@mui/icons-material/Person';

// Custom
import {Auth} from '../auth'
import HeaderMenuButton from './HeaderMenuButton'
import LoginIcon from '@mui/icons-material/Login';

function HeaderAuthenticated() {
    return (
        <React.Fragment>
            <HeaderMenuButton title='Home' route='' color='#fff' />
            <HeaderMenuButton title='About' route='' color='#fff' />
            <HeaderMenuButton title='Other' route='' color='#fff' />
            <HeaderMenuButton title='Login' route='' color='#fff' onClick={Auth} Icon={LoginIcon} />
        </React.Fragment>
    )
}

export default HeaderAuthenticated

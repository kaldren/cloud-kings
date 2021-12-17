import React from 'react'

// Custom
import {Auth} from '../auth'
import LinkButton from './LinkButton'
import LoginIcon from '@mui/icons-material/Login';

function HeaderAuthenticated() {
    return (
        <React.Fragment>
            <LinkButton title='Home' route='' color='#fff' />
            <LinkButton title='About' route='/about' color='#fff' />
            <LinkButton title='Other' route='' color='#fff' />
            <LinkButton title='Login' route='' color='#fff' onClick={Auth} Icon={LoginIcon} />
        </React.Fragment>
    )
}

export default HeaderAuthenticated

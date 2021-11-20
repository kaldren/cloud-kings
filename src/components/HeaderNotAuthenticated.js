import React from 'react'

// Custom
import {Auth} from '../auth'
import Button from './Button'
import LoginIcon from '@mui/icons-material/Login';

function HeaderAuthenticated() {
    return (
        <React.Fragment>
            <Button title='Home' route='' color='#fff' />
            <Button title='About' route='' color='#fff' />
            <Button title='Other' route='' color='#fff' />
            <Button title='Login' route='' color='#fff' onClick={Auth} Icon={LoginIcon} />
        </React.Fragment>
    )
}

export default HeaderAuthenticated

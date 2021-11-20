import React from 'react'
import PersonIcon from '@mui/icons-material/Person';

import HeaderMenuButton from './HeaderMenuButton'

function HeaderAuthenticated() {
    return (
        <React.Fragment>
            <HeaderMenuButton title='Messages' route='' color='#fff' />
            <HeaderMenuButton title='Profile' route='' color='#fff' Icon={PersonIcon} />
        </React.Fragment>
    )
}

export default HeaderAuthenticated

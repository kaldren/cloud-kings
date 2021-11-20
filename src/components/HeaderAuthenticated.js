import React from 'react'
import PersonIcon from '@mui/icons-material/Person';

import Button from './Button'

function HeaderAuthenticated({user}) {
    return (
        <React.Fragment>
            <Button title='Messages' route='' color='#fff' />
            <Button title={user.displayName} route='' color='#fff' Icon={PersonIcon} />
        </React.Fragment>
    )
}

export default HeaderAuthenticated

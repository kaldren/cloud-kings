import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

// Custom
import {signOut} from '../auth'

function HeaderAuthenticated({user}) {
    return (
        <React.Fragment>
            {/* <Button title='Messages' route='' color='#fff' />
            <Button title={user.displayName} route='' color='#fff' Icon={PersonIcon} /> */}
            <DropdownButton id="dropdown-basic-button" title={user.displayName}>
                <Dropdown.Item href="#/action-2">Messages</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Settings</Dropdown.Item>
                <button onClick={signOut}> Logout </button>
            </DropdownButton>
        </React.Fragment>
    )
}

export default HeaderAuthenticated

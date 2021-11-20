import React from 'react'
import { Link } from "react-router-dom";

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
                <Link to="/" onClick={signOut} class="dropdown-item"> Logout </Link>
            </DropdownButton>
        </React.Fragment>
    )
}

export default HeaderAuthenticated

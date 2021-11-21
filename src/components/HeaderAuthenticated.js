import React from 'react'
import { Link } from "react-router-dom";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

// Icons
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import SettingsIcon from '@mui/icons-material/Settings';
import ForumIcon from '@mui/icons-material/Forum';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ListAltIcon from '@mui/icons-material/ListAlt';

// Custom
import {signOut} from '../auth'

function HeaderAuthenticated({user}) {
    return (
        <React.Fragment>
            <img className='profile-photo' src={user.photoURL} alt={user.displayName} />
            <DropdownButton id="dropdown-basic-button" title={user.displayName}>
                <Link to="/my-items" className="dropdown-item"> <ListAltIcon /> My items </Link>
                <Link to="/new" className="dropdown-item"> <FiberNewIcon /> Sell item </Link>
                <Dropdown.Item href="#/action-2"><ForumIcon /> Messages</Dropdown.Item>
                <Dropdown.Item href="#/action-3"> <SettingsIcon /> Settings</Dropdown.Item>
                <Link to="/" onClick={signOut} className="dropdown-item"> <MeetingRoomIcon /> Logout </Link>
            </DropdownButton>
        </React.Fragment>
    )
}

export default HeaderAuthenticated

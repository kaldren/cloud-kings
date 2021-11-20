import React from 'react'
import { Link } from "react-router-dom";

import './HeaderMenuButton.css'

function HeaderMenuButton({title, Icon, color, route, onClick}) {

    return (
        <div className='headerMenuButton'>
            <Link to={route} style={{color: color}} onClick={onClick}>
            {Icon && <Icon className='headerMenuButton__icon' />}
            {title}
            </Link>
        </div>
    )
}

export default HeaderMenuButton

import React from 'react'
import './HeaderMenuButton.css'

function HeaderMenuButton({title, Icon}) {
    return (
        <div id='headerMenuButton'>
            {Icon && <Icon className='headerMenuButton__icon' />}
            {title}
        </div>
    )
}

export default HeaderMenuButton

import React from 'react'
import err from '../resources/404.jpg'

import './Oops.css'

function Oops() {
    return (
        <div className='oops'>
            <img src={err} alt='Not found!' />
        </div>
    )
}

export default Oops
import React from 'react'
import './Item.css'

function Item({image, description, price}) {
    return (
        <div className='item'>
            <img src={image} alt='Item for sell' />
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
}

export default Item

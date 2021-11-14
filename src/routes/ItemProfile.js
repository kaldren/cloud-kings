import React from 'react'

export default function ItemProfile({image, description, price}) {
    return (
        <div className='itemProfile'>
            <img src={image} alt='The item' />
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
}
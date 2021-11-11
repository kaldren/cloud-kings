import React from 'react'
import Item from './Item'

import './Feed.css'

function Feed() {
    return (
        <div id="feed">
            <Item image='https://picsum.photos/id/1/300/300' description='Lorem ipsum, dolor sit a...' price='15.99' />
            <Item image='https://picsum.photos/id/22/300/300' description='Lorem ipsum, dolor sit a...' price='16.99' />
            <Item image='https://picsum.photos/id/53/300/300' description='Lorem ipsum, dolor sit a...' price='25.99' />
            <Item image='https://picsum.photos/id/46/300/300' description='Lorem ipsum, dolor sit a...' price='5.99' />
            <Item image='https://picsum.photos/id/65/300/300' description='Lorem ipsum, dolor sit a...' price='45.99' />
            <Item image='https://picsum.photos/id/116/300/300' description='Lorem ipsum, dolor sit a...' price='75.99' />
        </div>
    )
}

export default Feed

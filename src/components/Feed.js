// Core
import React, { useState, useEffect } from 'react';
import { collection, doc, getDocs } from "firebase/firestore"; 

import Item from './Item'

import { db } from '../firebase'

// Styles
import './Feed.css'

function Feed() {
    const [items, setItems] = useState([]);

    const itemsCollectionRef = collection(db, 'items');

    useEffect(() => {
        const getItems = async () => {
            const items = await getDocs(itemsCollectionRef);

            setItems(items.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getItems();
    }, []);

    return (
        <div id="feed">
            {items.map((item) => {
                return <Item image={item.image} description={item.description} price={item.price} />
            })}
        </div>
    )
}

export default Feed

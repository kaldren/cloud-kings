// Core
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

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
    }, [itemsCollectionRef]);

    return (
            <div id="feed">

                {items.map((item) => {
                    return (
                        <Link 
                            to={`/items/${item.id}`}
                            key={item.id}
                        >
                            <Item image={item.image} description={item.description} price={item.price} />
                        </Link>
                    )
                })}

            </div>
    )
}

export default Feed

// Core
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { collection, getDocs,query, orderBy, limit } from "firebase/firestore";

import Item from './Item'

import { db } from '../firebase'

// Styles
import './Feed.css'

function Feed() {
    const [items, setItems] = useState([]);

    const itemsCollectionRef = collection(db, 'items');

    useEffect(() => {
        const getItems = async () => {
            const itemsQuery = query(itemsCollectionRef, orderBy("price"), limit(6));
            
            var items = await getDocs(itemsQuery);

            setItems(items.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getItems();
    }, []);

    return (
            <div id="feed">

                {items.map((item) => {
                    return (
                        <Link 
                            to={`/items/${item.id}`}
                            key={item.id}
                        >
                            <Item image={item.image} description={item.shortDescription} price={item.price} />
                        </Link>
                    )
                })}

            </div>
    )
}

export default Feed

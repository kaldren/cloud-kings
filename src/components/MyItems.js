import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Item from './Item'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase';

import {getUserData} from '../auth';
import './MyItems.css';

function MyItems() {
    const [items, setItems] = useState([]);

    const itemsCollectionRef = collection(db, 'items');
    const user = getUserData();

    useEffect(() => {
        const getItems = async () => {
            const itemsQuery = query(itemsCollectionRef, where("email", "==", user.email));
            
            var items = await getDocs(itemsQuery);

            setItems(items.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getItems();
    }, [itemsCollectionRef]);

    return (
        <div id="myItems">
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

export default MyItems

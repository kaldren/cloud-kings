import React, { useState, useEffect } from 'react';
import { db } from '../firebase'
import { doc, getDoc, collection, getDocs,query, where } from "firebase/firestore";
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import Item from './Item'

function Search() {
    const [searchItems, setSearchItems] = useState([]);
    const search = useLocation().search;
    const searchQuery = new URLSearchParams(search).get('q').split();

    useEffect(() => {
        const searchItems = async () => {
            const itemsCollectionRef = collection(db, 'items');

            // Firebase doesn't support advanced searching (like contains, for example) so we use full text
            // https://firebase.google.com/docs/firestore/solutions/search
            const itemsQuery = query(itemsCollectionRef, where("shortDescription", "in", searchQuery));
        
            var items = await getDocs(itemsQuery);
            console.log(items);
            setSearchItems(items.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        searchItems();
    }, []);

    return (
        <div>
            <h2>{searchItems.length} result(s) found: </h2>

                {searchItems.map((item) => {
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

export default Search

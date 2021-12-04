import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { doc, getDoc, collection, getDocs,query, where } from "firebase/firestore";

import { db } from '../firebase'

import { getUserData } from '../auth';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

import AppSettings from '../appSettings';


function Likes() {
    const [likedItems, setLikedItems] = useState([]);

    useEffect(() => {
        const userId = getUserData().uid;

        const getItems = async () => {
            const docRef = doc(db, "likes", userId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log(docSnap.data())
                const itemsCollectionRef = collection(db, 'items');
                const itemsQuery = query(itemsCollectionRef, where("id", "in", docSnap.data().itemIds));
            
                var items = await getDocs(itemsQuery);

                setLikedItems(items.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            }
        }

        getItems();
    }, []);

    return (
        <div>
            <h3>Here are your likes</h3>

            <ListGroup as="ol" numbered>
            {likedItems.map((like) => {
                return (<ListGroup.Item
                    key={like.id}
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold"><Link to={`/items/${like.id}`}>{like.shortDescription}</Link></div>
                        Cras justo odio
                    </div>
                    <Badge variant="primary" pill>
                        {like.price} {AppSettings.CURRENCY}
                    </Badge>
                </ListGroup.Item>)
            })}
            </ListGroup>
        </div>
    )
}

export default Likes

import React, { useState, useEffect } from 'react';
import { doc, getDoc, collection, getDocs,query, where } from "firebase/firestore";

import { db } from '../firebase'

import { getUserData } from '../auth';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';


function Likes() {
    const [likes, setLikes] = useState([]);
    const [likedItems, setLikedItems] = useState([]);


    useEffect(() => {
        const userId = getUserData().uid;

        const getItems = async () => {
            const docRef = doc(db, "likes", userId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setLikes(docSnap.data().itemIds);

                if (likes !== []) {
                    const itemsCollectionRef = collection(db, 'items');
                    const itemsQuery = query(itemsCollectionRef, where("id", "in", likes));
                
                    var items = await getDocs(itemsQuery);

                    setLikedItems(items.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                }

            }
        }

        getItems();
    }, []);

    return (
        <div>
            <h3>You have liked ({likes.length}) items</h3>

            <ListGroup as="ol" numbered>
            {likedItems.map((like) => {
                return (<ListGroup.Item
                    key={like.id}
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{like.shortDescription}</div>
                        Cras justo odio
                    </div>
                </ListGroup.Item>)
            })}
            </ListGroup>
        </div>
    )
}

export default Likes

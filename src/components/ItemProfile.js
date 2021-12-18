import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { arrayUnion, doc, getDoc, updateDoc, collection, query, where, getDocs } from "firebase/firestore";

import { db } from '../firebase'
import { useParams } from 'react-router';

import FavoriteIcon from '@mui/icons-material/Favorite';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './ItemProfile.css';
import AppSettings from '../appSettings';

import { getUserData } from '../auth';

function ItemProfile() {
    let { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        const getItem = async () => {
            const currentItem = await fetchItem(id);

            setItem(currentItem);
        }

        getItem();
    }, [id]);

    return (
        <div className='itemProfile'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item?.image} alt={item.shortDescription} />
                <Card.Body>
                    <Link to={`/users/${item?.username}`}></Link>

                    <Card.Title>{item?.shortDescription}</Card.Title>
                    <Card.Text>
                        {item?.longDescription}
                    </Card.Text>
                    <Badge variant="primary" pill>
                        {item?.price} {AppSettings.CURRENCY}
                    </Badge>
                    <div className='itemProfile__icons'>
                        <Button className='likeBtn'><FavoriteIcon onClick={(e) => handleItemLike(id)}/></Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

async function fetchItem(id) {
    const docRef = doc(db, 'items', id);
    const docSnap = await getDoc(docRef);

    return docSnap.exists() ? docSnap.data() : null;
}

async function handleItemLike(id) {
    const userData = getUserData();

    if (userData === undefined) {
        window.alert('Please sign in to add items to favorites.');
        return;
    }
    
    const likesRef = doc(db, "likes", userData.uid);

    await updateDoc(likesRef, {
        "itemIds": arrayUnion(id)
    });

    document.querySelector('.itemProfile__icons .likeBtn').style.backgroundColor = 'red';
}
export default ItemProfile

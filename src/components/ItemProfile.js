import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { doc, getDoc} from "firebase/firestore";

import { db } from '../firebase'
import { useParams } from 'react-router';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Card  from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';

import './ItemProfile.css';

function ItemProfile() {
    let { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        const getItem = async () => {
            const currentItem = await fetchItem(id);

            setItem(currentItem);
        }

        getItem();
    }, []);

    return (
        <div className='itemProfile'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item?.image} alt={item.shortDescription} />
            <Card.Body>
            <Link to={`/users/${item.username}`}>etst</Link>
                
                <Card.Title>{item?.shortDescription}</Card.Title>
                <Card.Text>
                    {item?.longDescription}
                </Card.Text>
                <div class='itemProfile__icons'>
                    <Button><ThumbUpAltIcon/></Button>
                    <Button><FavoriteIcon/></Button>
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

export default ItemProfile

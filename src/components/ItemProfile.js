import React, { useState, useEffect } from 'react';
import { doc, getDoc} from "firebase/firestore";

import { db } from '../firebase'
import { useParams } from 'react-router';

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
            <img src={item?.image} alt={item.description} />
            <p>{item?.description}</p>
            <p>{item?.price}</p>
        </div>
    )
}

async function fetchItem(id) {
    const docRef = doc(db, 'items', id);
    const docSnap = await getDoc(docRef);
    
    return docSnap.exists() ? docSnap.data() : null;
}

export default ItemProfile

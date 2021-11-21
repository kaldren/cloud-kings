import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Item from './Item'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase';

import {getUserData} from '../auth';
import './MyItems.css';
import GenericButton from './GenericButton';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

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

    const submit = () => {
        confirmAlert({
          message: 'Are you sure you want to delete this item?',
          buttons: [
            {
              label: 'Yes',
              onClick: () => alert('Click Yes')
            },
            {
              label: 'No',
              onClick: () => alert('Click No')
            }
          ]
        });
      };
    

    return (
        <div id="myItems">
                {items.map((item) => {
                    return (
                        <div className='item'>
                            <Link 
                                to={`/items/${item.id}`}
                                key={item.id}
                            >
                                <Item image={item.image} description={item.shortDescription} price={item.price} />
                            </Link>
                            <GenericButton variant='danger' Icon={DeleteForeverIcon} text='Remove' onClick={submit} />
                        </div>
                    )
                })}
        </div>
    )
}

export default MyItems

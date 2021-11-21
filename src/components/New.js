import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';

import { db } from '../firebase'
import { getDatabase, ref, set } from "firebase/database";
import { doc, setDoc } from "firebase/firestore"; 
import { getUserData } from '../auth';

import './New.css';
import GenericButton from './Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function New() {

    const [shortDescription, setShortDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');
    const [price, setPrice] = useState(0);

    return (
        <div id='newItem'>
            <h2>New item for sale</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Short description</Form.Label>
                    <Form.Control type="text" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} placeholder="What are you selling?" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="For example 5.99" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>A little bit more detail...</Form.Label>
                    <Form.Control value={longDescription} onChange={(e) => setLongDescription(e.target.value)} as="textarea" placeholder="Explain in a more detail what are you selling..." rows={3} />
                </Form.Group>
                <GenericButton text='Create' variant='primary' Icon={AddCircleIcon} onClick={(e) => { postItem({'shortDescription': shortDescription, 'longDescription': longDescription, 'price': price})}} />
            </Form>
        </div>
    )
}

async function postItem(data) {
    const { 
        v4: uuidv4,
      } = require('uuid');
    const userData = getUserData();
    const username = userData.displayName;
    const email = userData.email;
    const photo = userData.photoURL;

    // Validation

    // Submit to firebase
    await setDoc(doc(db, "items", uuidv4()), {
      username: username,
      email: email,
      profile_picture : photo,
      shortDescription: data.shortDescription,
      longDescription: data.longDescription,
      price: data.price
      });
}

export default New

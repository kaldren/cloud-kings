import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';

import { db } from '../firebase'
import { doc, setDoc } from "firebase/firestore"; 
import { getUserData } from '../auth';

import './New.css';
import GenericButton from './GenericButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AlertBox from './AlertBox';

function New() {

    const [shortDescription, setShortDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');
    const [price, setPrice] = useState(0);

    // New item created?
    const [isCreated, setIsCreated] = useState(0);

    function postItem(data) {
        const { 
            v4: uuidv4,
          } = require('uuid');
        const userData = getUserData();
        const username = userData.displayName;
        const email = userData.email;
        const photo = userData.photoURL;

        // Validation
    
        // Submit to firebase
        const itemId = uuidv4();

        setDoc(doc(db, "items", itemId), {
          id: itemId,
          username: username,
          email: email,
          shortDescription: data.shortDescription,
          longDescription: data.longDescription,
          price: data.price,
          image: generateRandomImage()
          })
          .then(() => {
            setIsCreated(1);
          })
          .catch(() => {
              setIsCreated(-1);
          });
    }

    return (
        <div id='newItem'>
            {isCreated === 1 ? <AlertBox title='Successfully created new item for sale.' variant='success' /> : ''}
            {isCreated === -1 ? <AlertBox title='Error occured creating new item. Please try again.' variant='error' /> : ''}
            
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
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Attach photo</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <GenericButton 
                text='Create' 
                variant='primary' 
                Icon={AddCircleIcon} 
                onClick={(e) => { postItem({'shortDescription': shortDescription, 'longDescription': longDescription, 'price': price})}}
                classList = {isCreated === 1 ? 'disabled' : ''}/>
            </Form>
        </div>
    )
}

function generateRandomImage() {
    return `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/300`;
}

export default New

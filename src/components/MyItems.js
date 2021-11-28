import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Item from './Item'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { doc, deleteDoc } from "firebase/firestore";
import { getUserData } from '../auth';
import './MyItems.css';
import GenericButton from './GenericButton';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import AlertBox from './AlertBox';

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

    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [isItemDeleted, setIsItemDeleted] = useState(false);
    const [isItemEdited, setIsItemEdited] = useState(false);

    const handleClose = () => setShow(false);
    const handleCloseEdit = () => setShowEdit(false);

    const handleShowEdit = (e) => {
        setShowEdit(true);
        const itemId = e.target.parentNode.parentNode.getAttribute('data-item-id');
        setSelectedItem(itemId);
    }

    const handleEdit = (e) => {
        const itemId = e.target.parentNode.getAttribute('data-item-id');
        setIsItemEdited(true);
        // deleteDoc(doc(db, "items", itemId))
        //     .then(() => {
        //         setShow(false);
        //     })
        //     .catch(() => {
        //         console.log('Error!')
        //     });
    }

    const handleShowDelete = (e) => {
        setShow(true);
        setIsItemDeleted(false);
        const itemId = e.target.parentNode.parentNode.getAttribute('data-item-id');
        const title = e.target.parentNode.parentNode.getAttribute('data-item-description');
        setSelectedItem({ itemId, title });
    }

    const handleDelete = () => {
        deleteDoc(doc(db, "items", selectedItem.itemId))
            .then(() => {
                // setShow(false);
                setIsItemDeleted(true);
            })
            .catch(() => {
                console.log('Error!')
            });
    }


    return (
        <div id="myItems">
            {items.map((item) => {
                return (
                    <div className='item' data-item-id={item.id} key={item.id} data-item-description={item.shortDescription}>
                        <Link
                            to={`/items/${item.id}`}
                            key={item.id}
                        >
                            <Item image={item.image} description={item.shortDescription} price={item.price} />
                        </Link>
                        <div className='item-options'>
                            <GenericButton variant='secondary' Icon={EditIcon} text='' onClick={(e) => { handleShowEdit(e) }} />
                            <GenericButton variant='danger' Icon={DeleteForeverIcon} text='' onClick={(e) => { handleShowDelete(e) }} />
                        </div>
                    </div>
                )
            })}

            <Modal show={show} onHide={handleClose}>
                {isItemDeleted === true ? <AlertBox title='Deletion successful.' variant='success' /> :
                    <div>
                        <Modal.Header closeButton>
                            <Modal.Title>Deleting</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you want to delete this?</Modal.Body>
                        <Modal.Footer>
                            <GenericButton
                                text='Cancel'
                                variant='secondary'
                                onClick={handleClose}
                                classList={isItemDeleted === true ? 'disabled' : ''} />
                            <GenericButton
                                text='Delete'
                                variant='danger'
                                onClick={handleDelete}
                                classList={isItemDeleted === true ? 'disabled' : ''} />
                        </Modal.Footer>
                    </div>
                }
            </Modal>

            <Modal show={showEdit} onHide={handleCloseEdit}>
                {isItemEdited === true ? <AlertBox title='Edit successful.' variant='success' /> :

                    <div>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formShortDescription">
                                <Form.Label>Short description</Form.Label>
                                <Form.Control type="text" placeholder="Enter short description" />
                                <Form.Text className="text-muted">
                                Short description about the item you are selling.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formLongDescription">
                                <Form.Label>Long description</Form.Label>
                                <Form.Control as="textarea" placeholder="Long description" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" placeholder="Price" />
                            </Form.Group>
                        </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <GenericButton
                                text='Cancel'
                                variant='secondary'
                                onClick={handleCloseEdit}
                                classList={isItemDeleted === true ? 'disabled' : ''} />
                            <GenericButton
                                text='Save'
                                variant='success'
                                onClick={handleEdit}
                                classList={isItemDeleted === true ? 'disabled' : ''} />
                        </Modal.Footer>
                    </div>
            }        
            </Modal>
        </div>
    )
}

export default MyItems

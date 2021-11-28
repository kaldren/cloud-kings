import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Item from './Item'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { getUserData } from '../auth';
import './MyItems.css';
import GenericButton from './GenericButton';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

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

    // Edit
    const [shortDescription, setShortDescription] = useState("");
    const [longDescription, setLongDescription] = useState("");
    const [price, setPrice] = useState(0);

    const handleClose = () => setShow(false);
    const handleCloseEdit = () => setShowEdit(false);

    const handleShowEdit = (item) => {
        setShowEdit(true);

        setShortDescription(item.shortDescription);
        setLongDescription(item.longDescription);
        setPrice(item.price);

        setSelectedItem(item);
    }

    const handleEditShortDescription = (e) => {
        setShortDescription(e.target.value);
    }

    const handleEditLongDescription = (e) => {
        setLongDescription(e.target.value);
    }

    const handleEditPrice = (e) => {
        setPrice(e.target.value);
    }


    const handleEdit = async (e) => {

        selectedItem.shortDescription = shortDescription;
        selectedItem.longDescription = longDescription;
        selectedItem.price = price;

        await updateDoc(doc(db, "items", selectedItem.id), selectedItem)
        .then(() => {
            setIsItemEdited(true);
        })
        .catch(() => {
            setIsItemEdited(false);
            console.log('Error!')
        });
    }

    const handleShowDelete = (item) => {
        setShow(true);
        setSelectedItem(item);
    }

    const handleDelete = async () => {
        await deleteDoc(doc(db, "items", selectedItem.id))
            .then(() => {
                setShow(false);
                setIsItemDeleted(true);
            })
            .catch(() => {
                setIsItemDeleted(false);
                console.log('Error!')
            });
    }


    return (
        <div id="myItems">
            {items.map((item) => {
                return (
                    <div className='item' data-item-id={item.id} key={item.id} data-item-title={item.shortDescription} data-item-description={item.longDescription}>
                        <Link
                            to={`/items/${item.id}`}
                            key={item.id}
                        >
                            <Item image={item.image} description={item.shortDescription} price={item.price} />
                        </Link>
                        <div className='item-options'>
                            <GenericButton variant='secondary' Icon={EditIcon} text='' onClick={(e) => { handleShowEdit(item) }} />
                            <GenericButton variant='danger' Icon={DeleteForeverIcon} text='' onClick={(e) => { handleShowDelete(item) }} />
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
                                    <Form.Control type="text" value={shortDescription} onChange={handleEditShortDescription} />
                                    <Form.Text className="text-muted">
                                        Short description about the item you are selling.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formLongDescription">
                                    <Form.Label>Long description</Form.Label>
                                    <Form.Control as="textarea" value={longDescription} onChange={handleEditLongDescription} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="number" value={price} onChange={handleEditPrice} />
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

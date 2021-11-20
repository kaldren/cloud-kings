import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';

import './New.css';
import GenericButton from './Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function New() {
    return (
        <div id='newItem'>
            <h2>New item for sale</h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Short description</Form.Label>
                    <Form.Control type="text" placeholder="What are you selling?" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>A little bit more detail...</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <GenericButton text='Create' variant='primary' Icon={AddCircleIcon} />
            </Form>
        </div>
    )
}

export default New

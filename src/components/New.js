import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './New.css';

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
                <Button variant="primary">Create</Button>
            </Form>
        </div>
    )
}

export default New

import React, { useState, useEffect } from 'react';

import Card  from 'react-bootstrap/Card';
import Nav  from 'react-bootstrap/Nav';
import Button  from 'react-bootstrap/Button';

import { db } from '../firebase'
import { doc, getDoc } from "firebase/firestore";

import { useParams } from 'react-router';

import { Navigate } from 'react-router';
import { useNavigate } from "react-router-dom";


function UserProfile() {
    let { id } = useParams();
    const [user, setUser] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            const docRef = doc(db, 'users', id);

            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                // doc.data() will be undefined in this case
                navigate("/oops", { replace: true });
            }

            setUser(docSnap.data());
        }

        getUser();
    }, []);

    return (
        <div>
            <Card>
                <Card.Header>
                    <Nav variant="pills" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link href="#first">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">Message</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{user?.username}</Card.Title>
                    <Card.Text>
                        {user?.about}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export default UserProfile

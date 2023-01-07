import React from 'react';
import { Card,Col } from 'react-bootstrap';
import './Expert.css';

const Expert = ({expert}) => {
    const {id,name,img,experience} = expert; 
    return (
        <Col>
            <br />
            <Card className='cardStyles' >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title> {name}</Card.Title>
                <Card.Text>
                    Id: {id} <br />
                    Experience: {experience}
                </Card.Text>
                </Card.Body>
               
    
            </Card>
        </Col>
    );
};

export default Expert;
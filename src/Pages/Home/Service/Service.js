import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const {id,name,img,description,price} = props.service;
    const navigate = useNavigate();
    const navigateTodetails = (id) =>{
        navigate(`/service/${id}`);
    }
    return (
        <div>
            <Card className='container cardStyles1'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>Service id: {id}</Card.Title>
                <h6>{name}</h6>
                <h6>Price: {price} Taka </h6>
                </Card.Body>
                {/* <Button onClick={()=> navigateTodetails(id) } >View Details</Button> <br /> */}
                <Button onClick={()=> props.addToCart(props.service)} >Take Service</Button>
                <br />
            </Card>
        </div>
    );
};

export default Service;
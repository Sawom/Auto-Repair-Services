import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const services = [
    {
        "id": 1,
        "name": "ENGINE DIAGNOSTIC",
        "price": 1000,
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        "img": "https://i.ibb.co/kGL6fzy/1.jpg"
    },
    {
        "id": 2,
        "name": "WHEEL ALIGNMENT",
        "price": 250,
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        "img": "https://i.ibb.co/XFQtzHk/2.jpg"
    },
    {
        "id": 3,
        "name": "OIL CHANGING",
        "price": 150,
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        "img": "https://i.ibb.co/YQT5PVx/3.jpg"
    },
    {
        "id": 4,
        "name": "BRAKE REPARING",
        "price": 480,
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        "img": "https://i.ibb.co/YBB8Bj5/4.jpg"
    },
    {
        "id": 5,
        "name": "WASH AND GLASSING",
        "price": 300,
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa.",
        "img": "https://i.ibb.co/9cQxb1X/5.jpg"
    },
    {
        "id": 6,
        "name": "COMPLETE ANALYSIS",
        "price": 400,
        "description": "Lorem ipsum dolor sit amet, consectetu radipisi cing elitBeatae autem aperiam nequ quaera molestias voluptatibus harum ametipsa",
        "img": "https://i.ibb.co/DG6yNtQ/6.jpg"
    }
]
    const [cart, setCart] = useState([]);
    // add to cart
    const addToCart = (service)=>{
        const newCart = [...cart,service]
        setCart(newCart);
    }
    return (
        <div id='serve' > 
            <h1 className='text-primary text-center mt-5'> Our Services</h1>
           <Row className='part1 ' xs={2} sm={2} md={2} lg={2} >
                <Row className='part2' xs={1} sm={1} md={2} lg={3} >
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service} 
                            addToCart = {addToCart}
                        ></Service> )
                    }
                </Row>
                <div className='part3' >
                    <Cart cart={cart}></Cart>
                </div>
            </Row> 
        </div>
    );
};

export default Services;
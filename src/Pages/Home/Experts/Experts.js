import React from 'react';
import { Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';

const Experts = () => {
const experts = [
    {"id": 1, "name": "Will Smith", "experience": "5 years", "img": "https://i.ibb.co/4jD5G6X/expert-1.jpg" },
    {"id": 2, "name": "Chris", "experience": "4 years", "img": "https://i.ibb.co/tXgS691/expert-2.jpg"},
    {"id": 3, "name": "Dwayne", "experience": "4 years", "img": "https://i.ibb.co/x5WtYbx/expert-3.jpg"},
    {"id": 4, "name": "Mars", "experience": "3 years", "img": "https://i.ibb.co/4jD5G6X/expert-4.jpg"},
    {"id": 5, "name": "Stephen", "experience": "2 years" , "img": "https://i.ibb.co/tXgS691/expert-5.jpg"},
    {"id": 6, "name": "Stachy", "experience": "1 years", "img": "https://i.ibb.co/92h3Cjk/expert-6.png"}
]

    return (
        <div className='container' >
            <h2 className='text-primary text-center mt-5'>Our Experts</h2>
            <h3>We have experienced experts</h3>
            <Row xs={1} sm={1} md={2} lg={3}>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </Row>
            
        </div>
    );
};

export default Experts;
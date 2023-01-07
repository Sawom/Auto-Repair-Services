import React from 'react';
import './Footer.css';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <br /><br /> 
            <footer style={{color:'white'}}  className="bg-dark d-flex justify-content-center align-items-center p-3">
            <div>
                <h1> Auto Repair Services </h1>
                <h5> Our service is 24/7 for you!</h5> <br />
                <p><small>copyright @ {year} </small></p>
            <br /> 
            </div>
            </footer>   
        </div>
    );
};

export default Footer;
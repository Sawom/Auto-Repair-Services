import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cart.css'
const Cart = ({cart}) => {
    let total = 0;
    for( const service of cart){
        total= total+service.price;
    }
    let total1 = total.toFixed(2);
    const tax = total*0.02;
    const tax1 = tax.toFixed(2);
    const grand = total+tax; 
    const grand1 = grand.toFixed(2);
    return (
        <div className='cart textStyle' >
            <h5 className='text-primary' >Order summary:</h5>
            <h6>Total service: {cart.length} </h6>
            <h6>Service price: {total1} Taka </h6>
            <h6>Tax (2%): {tax1} Taka </h6>
            <h6>Grand total: {grand1} Taka </h6>
            <br />
            <Link to='/confirm' >
                <Button>Confirm</Button>
            </Link>
        </div>
    );
};

export default Cart;
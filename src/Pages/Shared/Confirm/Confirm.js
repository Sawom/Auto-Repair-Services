import React from 'react';
import confirm from '../../../images/mark.gif';
const Confirm = () => {
    return (
        <div>
            <br />
            <h3>Confirmed!</h3> <br />
            <img className='w-50' src={confirm} alt="" />
        </div>
    );
};

export default Confirm;
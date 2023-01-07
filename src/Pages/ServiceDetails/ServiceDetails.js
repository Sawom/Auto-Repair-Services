import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
   
    const {serviceId} = useParams();
   
    return (
        <div >
            <br /><br />
            <div className='aboutStyle textStyle container'>
                <br />
                <h3>Service id: {serviceId}</h3>
                <h5></h5>
                <br />
            </div>
            <br />
        </div>
    );
};

export default ServiceDetails;
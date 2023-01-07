import React from 'react';
import { Carousel } from 'react-bootstrap';
import  { useState } from 'react';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {/* 1st slide */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{color:'yellow'}} >We provide our best services</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* 2nd slide */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{color:'yellow'}} >We have expert Engineers </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* 3rd slide */}
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    /> 
                    <Carousel.Caption>
                        <h3 style={{color:'yellow'}} >We provide 24/7 hours services </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
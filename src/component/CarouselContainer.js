import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './../images/b1.png';
import image2 from './../images/b2.png';
import image3 from './../images/b3.png';

const CarouselContainer = () => {
    return (<div>
        <Carousel>
  <Carousel.Item interval={100} >
    <img
      className="d-block w-100 "
      src={image1}
      alt="First slide"
    />
    
    
  </Carousel.Item>
  <Carousel.Item interval={50}>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
</div>
)
    }
    

export default CarouselContainer;

import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './../images/ln1.png';
import image2 from './../images/ln2.png';
import image3 from './../images/ln3.png';
import image4 from './../images/en1.png';
import image5 from './../images/en2.png';
import image6 from './../images/en3.png';

import './../akira.css';

const LNewsContainer = () => {
    return (<div className='container'>
        <div className='row'>
            <div className='col-lg-4 '>
            <Carousel>
  <Carousel.Item interval={100} >
    <img
      className="d-block w-100 "
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
          <h3 className='head'>Arriving Soon.</h3>
          <p>ZARA launches new summer collection on January 28, 2021.</p>
        </Carousel.Caption>
    
  </Carousel.Item>
  <Carousel.Item interval={50}>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />
    <Carousel.Caption>
          <h3 className='head'> Arriving Soon.</h3>
          <p>ZARA launches new summer collection on January 28, 2021.</p>
        </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={image3}
      alt="Third slide"
    />
    <Carousel.Caption>
          <h3 className='head'> Arriving Soon.</h3>
          <p>ZARA launches new summer collection on January 28, 2021.</p>
        </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
            <div className='col-lg-4 pt-1 '>
            
            <Carousel>
  <Carousel.Item interval={100} >
    <img
      className="d-block w-100 "
      src={image4}
      alt="First slide"
    />
    
    <Carousel.Caption>
          <h3> Launching Soon.</h3>
          <p>Apple announced that they will launch Iphone 14 on January 28, 2021.</p>
        </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={50}>
    <img
      className="d-block w-100"
      src={image5}
      alt="Second slide"
    />
   <Carousel.Caption>
          <p className='pd'>Readmi launches new Redmi series 7 on January 28, 2021 with some drastic upgrades.</p>
        </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image6}
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
  
            </div>
            <div className='col-lg-4 '>
            <Carousel>
  <Carousel.Item interval={100} >
    <img
      className="d-block w-100 "
      src={image2}
      alt="First slide"
    />
    <Carousel.Caption>
          <h3 className='head'>Arriving Soon.</h3>
          <p>ZARA launches new summer collection on January 28, 2021.</p>
        </Carousel.Caption>
    
  </Carousel.Item>
  <Carousel.Item interval={50}>
    <img
      className="d-block w-100"
      src={image1}
      alt="Second slide"
    />
    <Carousel.Caption>
          <h3 className='head'> Arriving Soon.</h3>
          <p>ZARA launches new summer collection on January 28, 2021.</p>
        </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={image3}
      alt="Third slide"
    />
    <Carousel.Caption>
          <h3 className='head'> Arriving Soon.</h3>
          <p>ZARA launches new summer collection on January 28, 2021.</p>
        </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>


        </div>
</div>
)
    }
    

export default LNewsContainer;

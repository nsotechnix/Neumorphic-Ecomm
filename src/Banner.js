import React from 'react'
import { Carousel } from 'react-bootstrap'
import './neumorphism.css'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'

function Banner() {
    return (
        <Carousel fade indicators={false} className='banner'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />
            </Carousel.Item> 
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner

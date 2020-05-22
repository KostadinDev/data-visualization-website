import React from 'react';

import Carousel from 'react-bootstrap/Carousel'

import './carousel.styles.sass.scss'
import imageOne from '../../IMG-3771.JPG'
import imageTwo from '../../IMG-5096.JPG'
import imageThree from '../../IMG-5139.JPG'
import medium from './../../images/medium-blueprint-gif.gif'


const CarouselSlide = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className ='carousel'>
        <Carousel>
            <Carousel.Item className = 'img'>
                <img
                    className="img"
                    src={medium}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 >First slide label</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img"
                    src={medium}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>Second slide label</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img"
                    src={medium}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 >Third slide label</h1>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
);

export default CarouselSlide;

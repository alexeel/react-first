import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slideImg1 from '../assets/slide-1.jpg';
import slideImg2 from '../assets/slide-2.jpg';
import slideImg3 from '../assets/slide-3.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item className="vh-100">
                    <img
                        className="d-block w-100 h-100"
                        src={ slideImg1 }
                        alt="first slide" 
                    />
                    <Carousel.Caption>
                        <h3>First slide</h3>
                        <p>Lorem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="vh-100">
                    <img
                        className="d-block w-100 h-100"
                        src={ slideImg2 }
                        alt="second slide" 
                    />
                    <Carousel.Caption>
                        <h3>Second slide</h3>
                        <p>Lorem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="vh-100">
                    <img
                        className="d-block w-100 h-100"
                        src={ slideImg3 }
                        alt="third slide" 
                    />
                    <Carousel.Caption>
                        <h3>Third slide</h3>
                        <p>Lorem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

import "./cards.css";
import fever from "../../../assets/img/fever.svg"
import breathing from "../../../assets/img/breathing.svg"
import lungs from "../../../assets/img/pulmones.png"
import cough from "../../../assets/img/covid.svg"
import Carousel from 'react-bootstrap/Carousel';
import React from 'react'


const Cards = () => {
    return (
        <>
            <Carousel data-bs-theme="dark" className='carousel'>
                <Carousel.Item className="carousel-item">
                    <div className="container-carousel">
                        <img
                            className="d-block w-100"
                            src={fever}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h5>Fever</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                    <div className="container-carousel">
                        <img
                            className="d-block w-100"
                            src={breathing}
                            alt="Second slide"
                        />
</div>
                        <Carousel.Caption>
                            <h5>Fever</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                <div className="container-carousel">
                    <img
                        className="d-block w-100"
                        src={lungs}
                        alt="Third slide"
                    />
                    </div>
                    <Carousel.Caption>
                        <h5>Cough</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item">
                <div className="container-carousel">
                    <img
                        className="d-block w-100"
                        src={cough}
                        alt="Third slide"
                    />
                    </div>
                    <Carousel.Caption>
                        <h5>Difficulty Breathing</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    );
}

export default Cards










import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../images/banner/banner.1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="title">Change the world by being yourself</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="title">Every moment is a fresh beginning</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="title">Die with memories, not dreams</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
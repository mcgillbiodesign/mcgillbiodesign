import React from "react";
import { Carousel } from "react-bootstrap";
import { Container } from "react-bootstrap";
import logo from "../img/logo.png";
import slide_1 from "../img/carousel/slide_1.jpg";
import slide_2 from "../img/carousel/slide_2.jpg";
import slide_3 from "../img/carousel/slide_3.jpg";
import slide_4 from "../img/carousel/slide_4.jpg";
import slide_5 from "../img/carousel/slide_5.jpg";
import "../index.scss";

const Slideshow = () => (
    <Carousel>
        <Carousel.Item>
            <img src={slide_1} width="100%"/>
            <Carousel.Caption>
                <img src={logo} width="100px" alt="McGill BioDesign"/>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src={slide_2} width="100%"/>
            <Carousel.Caption>
                <img src={logo} width="100px" alt="McGill BioDesign"/>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src={slide_3} width="100%"/>
            <Carousel.Caption>
                <img src={logo} width="100px" alt="McGill BioDesign"/>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src={slide_4} width="100%"/>
            <Carousel.Caption>
                <img src={logo} width="100px" alt="McGill BioDesign"/>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src={slide_5} width="100%"/>
            <Carousel.Caption>
                <img src={logo} width="100px" alt="McGill BioDesign"/>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

);

export default Slideshow;

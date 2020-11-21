    import React from 'react';
    import { Carousel} from 'react-bootstrap';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import pic from './images/dee.jpg';
    import yellow from './images/ee.jpg';
    import green from "./images/yellow.jpg";
    import './Home.css';
    import {Link} from 'react-router-dom'

    function Home() {
        return (
    <div>
    <Carousel className="carousel">
        <Carousel.Item interval={1000}>
            <img
            className="slide"
            src={pic}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <img
            className="slide"
            src={green}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="slide"
            src={yellow}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    <p style={{textAlign:"center"}}>
                    <Link to ='./facebook.com'><b>Developed by</b> <i>Diana Jesse</i></Link>
                    </p>
    </div>
            )
        }

    export default Home

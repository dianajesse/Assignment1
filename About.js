import React from 'react'
import {Jumbotron} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Container,Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from './images/3.jpg';
import green from "./images/4.jpg";
import calm from './images/2.jpg';
import kind from './images/9.jpg';
import greet from './images/dee.jpg';
import ask from './images/ee.jpg';
// import EditAdd from './EditAdd';
// import Upload from './Upload';
import {Link} from 'react-router-dom';

function About() {
    return (
        <div>

    <Jumbotron>
    <Container>
    <h1>Edit && Add</h1>
    <p>
        This is a simple hero unit, a simple Edit and Add component for calling
        extra attention to featured content or information.
    </p>
    <p>
     <Link to='/Upload'><Button variant="primary">Learn more</Button></Link>   
    </p>
    </Container>
    </Jumbotron>

<Container>
<Row md={3}>
     <Card style={{ width: '18rem' }}  >
          <Card.Img variant="top" src={calm} />
             <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={kind} />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
    <Card col-lg-2 style={{ width: '18rem' }}>
    <Card.Img variant="top" src={green} />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
    <Card col-lg-2 style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pic} />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
    <Card col-lg-2 style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ask} />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
    <Card col-lg-2 style={{ width: '18rem' }}>
    <Card.Img variant="top" src={greet} />
    <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
    </Row>
    </Container>
        </div>
    )
}

export default About

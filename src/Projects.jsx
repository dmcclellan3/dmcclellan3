import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myImage from '../images-projects/dadb.png'
import mindReaderImage from '../images-projects/mind-reader.png'
import weatherAppImage from '../images-projects/weather-app.png'

const Title = () => {
    return (
      <h1 className="d-flex justify-content-center">
        Projects
      </h1>
    )
}




function Projects(){
    return (
        <div 
          className="bg-light vh-100 p-5"
          style={{ color: 'black' }}
        >
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="###">Duke McClellan</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/projects">About Me</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <br />
          <Title />
            <br />
            <br />
            <div id="project-cards">
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={mindReaderImage} />
                <Card.Body>
                    <Card.Title>Mind Reader</Card.Title>
                    <Card.Text>
                        Mind reader game built using JavaScript 
                    </Card.Text>
                    <Button variant="dark">Open</Button>
                </Card.Body>
            </Card> 
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={weatherAppImage} />
                <Card.Body>
                    <Card.Title>Weather App</Card.Title>
                    <Card.Text>
                        Weather app built using Javascript and API
                    </Card.Text>
                    <Button variant="dark">Open</Button>
                </Card.Body>
            </Card> 
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Project Title</Card.Title>
                    <Card.Text>
                        text about project
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                </Card.Body>
            </Card> 
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Project Title</Card.Title>
                    <Card.Text>
                        text about project
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                </Card.Body>
            </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Project Title</Card.Title>
                        <Card.Text>
                            text about project
                        </Card.Text>
                        <Button variant="dark">Go somewhere</Button>
                    </Card.Body>
                </Card> 
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={myImage} />
                    <Card.Body>
                        <Card.Title>Restaurant Site</Card.Title>
                        <Card.Text>
                            Restaurant site using React and API menu 
                        </Card.Text>
                        <Button className='d-flex justify-content-center' variant="dark">Open</Button>
                    </Card.Body>
                </Card> 
            </div>
        </div>
    )
}















export default Projects 
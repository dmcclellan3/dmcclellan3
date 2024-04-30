import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
          className="bg-light h-100 p-5"
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
            </div>
        </div>
    )
}















export default Projects 
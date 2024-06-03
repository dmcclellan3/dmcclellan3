import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Week11() {
  return (
    <div style={{ textAlign: "center" }} className="p-5 bg-light">
      <Link to='/'>{'<- Back'}</Link>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">Duke McClellan</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
      <img className="img-thumbnail w-100 h-50" src="https://alpha-centauri-production.s3.amazonaws.com/uploads/content/174/header_image/header.jpg" alt="Blog Header" />
      <br />
      <br />
      <h1>Bootcamp Blog</h1>
      <br />
      <br />
      <br />

      <h3>Bootcamp Sprint 7</h3>

        <br />

        <h4>What are some similarities and differences you can see with JS and Python?</h4>

        <p>One of the similarities that I see between the two languages is that they both support first class functions. 
         Meaning that both JS and Python will allow you to pass functions as arguments and can be assigned to variables.  
        Another similarity is that both JavaScript and Python execute the code line by line. 

        <br />

        One of the differences between the two is the environment where they are executed.  
        Python works on the server side for backend development where the user won't see what's being produced by it. 
        JavaScript on the other hand runs in the browser.  It provides dynamics to a site or app that the user can interact with and see.  
        </p>

        <br />

        <h4>If you had started with Python instead of JS, how do you think the Bootcamp would be different? Would you have benefited?</h4>

        <br />

        <p>I'm glad that we started with Javascript.  I enjoyed being able to start with frontend development and 
         create projects that a user could interact with. Because of that learning JS gave me immediate feedback since I was 
        building things that could be tested in the browser.  So at the end of the day I don't personally feel that I would have benefited
        with starting in Python. </p>

    </div>
    );
}

export default Week11
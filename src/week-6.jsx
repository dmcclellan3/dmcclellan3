import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Week6() {
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
      <h3>Bootcamp Sprint 2</h3>

        <br />

        <h4>What did you learn about that helped you understand the development process?</h4>

        <p>I think something that has helped me in regards to the development process is the use of wireframes and pseudocoding. 
        When taking the extra time to think about what specific elements my project is going to need I'm able to write better code and limit going back to correct any mistakes or adding things in that were left out.</p>

        <br />

        <h4>What does it mean to develop good code?</h4>

        <p>It has been talked about a lot already in the past couple weeks but I think developing good code starts with good pseudocode.  
        Starting with the logic in what it is that you are trying to build first then translating that into the programming language. 
        I believe it helps limit mistakes, prevents important details from being left out and can prevent you from repeating yourself when writing code.</p>

        <br />

        <h4>What does it mean to be a good developer?</h4>

        <p>I think good developers have several skill sets that make them ideal for the role.  
        They're good researchers and have the ability to find their answer when troubleshooting a problem. 
        I believe a good developer also keeps in mind the end user in how a product will ultimately be utilized and are able to work with others well on a team.</p>

        <br />

        <h4>What is one thing that programmers hate doing?</h4>

        <p>Probably trying to sort through code that hasn't been written well and doesn't have any notes associated with it.</p>

    </div>
    );
}

export default Week6
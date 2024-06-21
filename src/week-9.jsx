import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Week9() {
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
      <h3>Bootcamp Sprint 5</h3>

        <br />

        <h4>What have you learned about CLI's?  Do you think that they're scary?</h4>
          <br />

        <p>CLI stands for Command Line Interface.  A CLI allows you to execute functions within an operating system. 
          We are going to start going over that this week while learning Python.</p>

          <br />

        <h4>If you were to build a CLI, what would it do?</h4>

        <br />

        <p>With being so new to them I'm not sure exactly how I would build them just yet.
          But I'm looking forward to learning more this week. 
        </p>
    </div>
    );
}

export default Week9
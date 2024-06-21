import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Week5() {
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
      <h3>Bootcamp Sprint 1</h3>

        <br />

        <h4>What is the number one thing that held you back this week? Why?</h4>

        <p>I think what held me back the most was not asking for help sooner.  
        It's easy to get overwhelmed when the project is assigned but going forward if I'm stuck on something I'm going to reach out for some direction sooner.</p>

        <br />

        <h4>What is one thing you would like to learn more about regarding JavaScript (JSON, Data Structures), Bootstrap, or Atomic Design?</h4>

        <p>I would say data structures in Javascript</p>

        <br />

        <h4>What is your “Why”?</h4>

        <p>I'm not very familiar with them at the moment and I want to continue to expand my understand in Javascript in as many ways as possible.</p> 

    </div>
    );
}

export default Week5
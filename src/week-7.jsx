import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Week7() {
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
      <h3>Bootcamp Sprint 3</h3>

        <br />

        <h4>What is pseudocode and how does it help with programming?</h4>

        <br />

        <p> Pseudocode is a very important part of the programming process.  
        Being new to the world of software development, I've seen how important it is already with the projects that we have been asked to complete. 
        Pseudocode is a detailed outline where we use common logic to help process what we want a program to do.  It doesn't incorporate any programming language and should be written in such a way that anyone reading it should be able to understand. 
        As we have learned so far in the bootcamp, pseudocode serves as a blueprint to a solution to a coding problem.
        <br />
        <br />
        There are multiple benefits of pseudocode which are beneficial for developers regardless of experience level.  
        When taking the time to pseudocode it forces you to slow down and to consider all of the different elements that are going to be needed for a particular project. 
        This limits the potential for things to be left out and keeps you from fighting with actual code which in turn will help expedite production. 
        Another benefit to pseudocode is that it's easy to write. It's much easier to write out logically want you are wanting to create and what will be needed.  
        That being said, when writing out only logic and your thoughts on a project it will make it easier to communicate with another developer on what you're working on.
        </p>

    </div>
    );
}

export default Week7
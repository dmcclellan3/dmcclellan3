import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Week8() {
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
      <h3>Bootcamp Sprint 4</h3>

        <br />

        <h4>Do you think JavaScript Frameworks and Libraries are easy or hard to use? Why?</h4>

        <br />

        <p>I wouldn't say that they're hard to use.  There is a learning curve to using react but I believe
          by improving and getting more proficient with React or another framework/library they can definitely be beneficial.
        </p>

        <br />

        <h4>What Frameworks or Libraries are you interested in learning more about?</h4>
        <br />
        <p>I think with just learning about React this week, I want to continue to learn more and expand my knowledge base around it. 
          I enjoyed using it on the most recent project and I'm looking forward to learning more about it this week! 
        </p>

    </div>
    );
}

export default Week8
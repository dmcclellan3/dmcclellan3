import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Week1() {
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

      <h3>Onboarding Week 1</h3>


        <br />

        <h4>Was your first week what you expected? Why? Why not?</h4>

        <p>I think this week was what I would have expected.  I've been able to get an understanding on some of the tools that we will be using through 
        the bootcamp and to meet my peers who will be a part of this process as well.</p>

        <br />

        <h4>What are you excited or eager to learn more about?</h4>

        <p>I'm looking forward to learning more about front end work.  During the pre-work I enjoyed working through some of the assignments that go 
        through the process of building a page where you can actually see things coming together. I'm looking forward to learning more about CSS and styling as well.</p>

        <br />

        <h4>What is something about you that can only be learned by reading this blog?</h4>

        <p>Since I graduated college in 2013 I've worked in multiple jobs in different fields. One of my most enjoyable experiences the opportunity to 
            travel with a touring band playing music full time.  After hearing about the bootcamp from several friends
            and previous graduates of the program, I decided to apply.  I'm excited to begin this process to learn and develop
            a skill that I believe will be beneficial for me in my career.  
        </p>
    </div>
    );
}

export default Week1
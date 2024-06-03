import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Week10() {
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

        <h3>Bootcamp Sprint 6</h3>

        <br />

        <h4>Now that you are halfway through bootcamp, what has been the biggest hurdle that you have gone past? What do you think is going to be the next biggest thing to power through?</h4>

        <br />

        <p>I think the biggest hurdle transitioning into the bootcamp was the pace.  
        I wasn't used to the 8-5 schedule with coding and building projects throughout the week and doing other smaller projects as well.
        However, I've adjusted to that and have been enjoying being able to build and create different projects using Javascript, React and most recently Python. 
        I think the next thing to power through as of now will be transitioning into back end development.  So far we have heavily been doing front end development
        but this coming week we will be diving more into backend related work.  It will be a change but I'm excited to learn more on that and learn about combining 
        front and back end together. 
        </p>
  

        <h4>Compared to earlier, what are three ideas you might want to do for your final project? Are they the same ideas as before, or have they changed now that you understand more about the technology and your limitations?</h4>

        <br />

        <p>I think my ideas for my final project have been relatively the same.  One idea is a golf app that can be used to help golfers (and me) 
        know their distances from the green and the pin and tracks score from any golf course based on their location.  Another idea I have
        was to build a mock brewery website since beer brewing is a hobby of mine with a directory of different beer styles. 
        </p>

        <br />

        <h4>What surprised you about your first week in Python and how was it different from your first week in JavaScript?</h4>

        <br />

        <p>I think what surprised me about python was how much easier it is to read. There were some differences that were a learning curve but   
        in a way it does read more like regular english in comparison to Javascript. </p>

    </div>
    );
}

export default Week10
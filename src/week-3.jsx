import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Week3() {
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
      <h3>Week 3</h3>
        <br />

        <h4>What are your thoughts about the roles HTML, CSS, and JavaScript play in the process of rendering content and providing a user experience?</h4>

        <p>It's been really interesting to see each piece of what goes into a page.  The foundational piece being HTML which provides the text and content on the page.  
        CSS is also important which provides the ability to give styling elements that are attracting to the eye.  JavaScript also being an important layer that incorporates functionality.</p>

        <br />

        <h4>What are some objects that your blog incorporates?</h4>

        <p>I don't currently have CSS or JavaScript incorporated in my blog at the moment.  
        I do plan to continue coming back and making changes as we go along that reflect some different concepts that we are learning as we progress through the camp.</p>

    </div>
    );
}

export default Week3
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Week4() {
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
      <h3>Week 4</h3>

        <br />

        <h4>What was helpful during Onboarding working remotely?</h4>

        <p>Working remotely was helpful for me during onboarding because it allowed me to finish working with my previous company.  
        It was great to be able to have an additional month of having income from my previous job and benefits before heading into the bootcamp for the next few months.</p>

        <br />

        <h4>What hindered your progress during Onboarding?</h4>

        <p>I think one of the difficulties of working remotely during onboarding is that the primary method of learning is by reading a lot of documentation.  
        I'm definitely a visual and auditory learner so it was challenging for me for process all of the information that was coming at me while building the projects that were required.  I'm really looking forward to being able to learn in person this week.</p>

        <br />

        <h4>How did you overcome challenges during Onboarding?</h4>

        <p>With being so new to the world of software development I had to research things often to be able to solve different coding issues.  
        I also would take advantage of the help channel in slack if I really got stuck on a particular problem.  I would do my best to figure it out on my own but would have that available if I really needed it.</p> 

    </div>
    );
}

export default Week4
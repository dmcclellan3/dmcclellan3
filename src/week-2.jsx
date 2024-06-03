import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Week2() {
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
      <h3>Week 2</h3>
      <br />
      <h4>What is something you wish you could do but currently do not have the coding skills to accomplish?</h4>
      <p>I would love to be able to really understand Javascript well. I know that we are getting ready to start that this week so I'm eager to learn more. It seems pretty complicated right now with how much it can do but I want to learn a lot about that since it's a really important piece with the interactive functions that it provides.</p>
      <br />
      <h4>What are you struggling with?</h4>
      <p>I think right now I'm struggling with the amount of information that's coming at us but I know that we're only just getting started. It also has been difficult trying to balance my current job with bootcamp work. It feels pretty overwhelming but I know that it's part of the process.</p>
      <br />
      <h4>How do you solve a problem?</h4>
      <p>I think that so far I've tried to use the rubber duck method that we've been taught. Verbalizing the problem out loud and thinking through what it is that I want the code to do. I also try to research the problem and figure out what the solution is for it.</p>
      <br />
      <h4>What methods do you use to help yourself get unstuck?</h4>
      <p>If I feel like I'm getting stuck or just spinning my wheels I'll just take a step away from it for a few minutes and not think about it. After a few minutes I'll come back and see if something clicks. If not, I'll get online and research the issue and the fix for it or I'll reach out to the help channel in slack.</p>
      <br />
    </div>
  );
}

export default Week2;

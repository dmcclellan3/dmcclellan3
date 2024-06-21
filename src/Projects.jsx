import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myImage from '../images-projects/dadb.png';
import mindReaderImage from '../images-projects/mind-reader.png';
import weatherAppImage from '../images-projects/weather-app.png';
import ticTacToeImage from '../images-projects/tic-tac-toe.png';
import todoListImage from '../images-projects/todolist.png';
import alarmClockImage from '../images-projects/alarm-clock.png'
import './Projects.css'; 

const Title = () => {
  return (
    <h1 className="d-flex justify-content-center">
      Projects
    </h1>
  );
}

function Projects() {
  return (
    <div 
      className="bg-light vh-100 p-5"
      style={{
        background: 'linear-gradient(to bottom right, #2c3e50, #4ca1af)',
        color: 'white'
      }}
    >
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Duke McClellan</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./Projects">Projects</Nav.Link>
            {/* <Nav.Link href="/projects">About Me</Nav.Link> */}
            <Nav.Link href="./Blog">Blog</Nav.Link>
            <Nav.Link href="./Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
      <Title />
      <br />
      <br />
      <div id="project-cards" className="project-cards-container">
        <Card className="project-card">
          <Card.Img variant="top" src={mindReaderImage} />
          <Card.Body>
            <Card.Title>Mind Reader</Card.Title>
            <Card.Text>
              Mind reader game built using JavaScript 
            </Card.Text>
            <Link to='https://mind-reader-ten.vercel.app/'><Button variant="dark">Open</Button></Link>
          </Card.Body>
        </Card> 
        <Card className="project-card">
          <Card.Img variant="top" src={weatherAppImage} />
          <Card.Body>
            <Card.Title>Weather App</Card.Title>
            <Card.Text>
              Weather app built using Javascript and API
            </Card.Text>
            <Link to='https://dmcclellan3.github.io/weather-app/'><Button variant="dark">Open</Button></Link>
          </Card.Body>
        </Card> 
        <Card className="project-card">
          <Card.Img variant="top" src={ticTacToeImage} />
          <Card.Body>
            <Card.Title>Tic Tac Toe</Card.Title>
            <Card.Text>
              Tic Tac Toe game created using Javascript
            </Card.Text>
            <Link to='https://dmcclellan3.github.io/tic-tac-toe/'><Button variant="dark">Open</Button></Link>
          </Card.Body>
        </Card> 
        <Card className="project-card">
          <Card.Img variant="top" src={alarmClockImage} />
          <Card.Body>
            <Card.Title>Digital Clock</Card.Title>
            <Card.Text>
              Clock built using HTML, CSS and Javascript
            </Card.Text>
            <Link to='https://dmcclellan3.github.io/alarm-clock/'><Button variant="dark">Open</Button></Link>
          </Card.Body>
        </Card>
        <Card className="project-card">
          <Card.Img variant="top" src={todoListImage} />
          <Card.Body>
            <Card.Title>Todo List</Card.Title>
            <Card.Text>
              Todo List
            </Card.Text>
            <Link to='https://todo-list-eight-topaz-20.vercel.app'><Button variant="dark">Open</Button></Link>
          </Card.Body>
        </Card> 
        <Card className="project-card">
          <Card.Img variant="top" src={myImage} />
          <Card.Body>
            <Card.Title>Restaurant Site</Card.Title>
            <Card.Text>
              Restaurant site using React and API menu 
            </Card.Text>
            <Link to='https://random-restaurant-three.vercel.app'><Button className='d-flex justify-content-center' variant="dark">Open</Button></Link>
          </Card.Body>
        </Card> 
      </div>
    </div>
  );
}

export default Projects;

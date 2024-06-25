import { Link } from "react-router-dom";
import './App.css'; 
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Title = () => {
  return (
    <h1>
    </h1>
  )
}

function App() {
  return (
    <div id="landing-page" className="h-100 p-3" style={{ color: 'white' }}>
      <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Duke McClellan</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="./Projects">Projects</Nav.Link>
                    {/* <Nav.Link href="./About">About Me</Nav.Link> */}
                    <Nav.Link href="./Blog">Blog</Nav.Link>
                    <Nav.Link href="./Contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
      <Title />
      <div className="landing-page">
        <header className="hero-section" style={bannerStyle}>
          <div className="hero-content">
            <h1>Hi, I'm Duke McClellan</h1>
            <p>I'm a Full Stack Web Developer passionate about building impactful web applications.</p>
            <Link to='./Projects'><button style={buttonStyle} className="cta-button">View My Work</button></Link>
          </div>
        </header>
      </div>
    </div>
  )
}

const bannerStyle = {
  background: 'linear-gradient(to bottom right, #2c3e50, #4ca1af)',
  color: 'white',
  padding: '50px',
  borderRadius: '10px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
  marginTop: '100px'
};

const buttonStyle = {
  background: '#4ca1af',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
};

export default App;

import { Link } from "react-router-dom"
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Contact.css';



function Contact(){
    <Link to='/'>{'<- Back'}</Link> 
    
    return(
        <div>
           <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="###">Duke McClellan</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="./Projects">Projects</Nav.Link>
                    <Nav.Link href="./About">About Me</Nav.Link>
                    <Nav.Link href="./Blog">Blog</Nav.Link>
                    <Nav.Link href="./Contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="contact-card">
            <div className="profile-section">
                <img src="https://media.licdn.com/dms/image/D4E03AQEbwJ59Zqv6TQ/profile-displayphoto-shrink_800_800/0/1715535669511?e=1722470400&v=beta&t=skBM7QmwIonzp_Gx3wGXbqXWBPnuCnQnBxJxRCKfLMM" alt="Profile" className="profile-pic" />
                <div className="profile-info">
                    <h2 className="name">Duke McClellan</h2>
                    <p className="title">Full Stack Web Developer</p>
                </div>
            </div>
            <div className="social-icons">
                <a href="mailto:wdmcclellan3@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/gmail-new.png" alt="Gmail" />
                </a>
                <a href="https://github.com/dmcclellan3?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/duke-mcclellan-3234b274/" target="_blank" rel="noopener noreferrer">
                    <img src="https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/In-Blue-Logo.png" alt="LinkedIn" />
                </a>
            </div>
        </div>
      </div>
      
    )
}

export default Contact
import { Link } from "react-router-dom"
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

function About() {
  return (
      <div className="App">
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
        <header className="header">
          <h1>Aspiring Web Developer Blog</h1>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
  
        <section className="hero">
          <h1>Welcome to My Blog</h1>
          <p>Sharing my journey as a web developer</p>
        </section>
  
        <section className="content" id="about">
          <h2>About Me</h2>
          <p>
            Hi, I'm an aspiring web developer passionate about building beautiful
            and functional web applications. Follow my blog to see my latest
            projects and learnings in web development.
          </p>
        </section>
  
        <section className="content" id="projects">
          <h2>Recent Projects</h2>
          <div className="grid">
            <div className="card">
              <img src="project1.jpg" alt="Project 1" />
              <h3>Project 1</h3>
              <p>A brief description of Project 1.</p>
            </div>
            <div className="card">
              <img src="project2.jpg" alt="Project 2" />
              <h3>Project 2</h3>
              <p>A brief description of Project 2.</p>
            </div>
            <div className="card">
              <img src="project3.jpg" alt="Project 3" />
              <h3>Project 3</h3>
              <p>A brief description of Project 3.</p>
            </div>
          </div>
        </section>
  
        <section className="content" id="blog">
          <h2>Latest Blog Posts</h2>
          <div className="grid">
            <div className="card">
              <h3>Blog Post 1</h3>
              <p>A brief description of Blog Post 1.</p>
            </div>
            <div className="card">
              <h3>Blog Post 2</h3>
              <p>A brief description of Blog Post 2.</p>
            </div>
            <div className="card">
              <h3>Blog Post 3</h3>
              <p>A brief description of Blog Post 3.</p>
            </div>
          </div>
        </section>
  
        <footer className="footer">
          <p>© 2024 Aspiring Web Developer Blog</p>
        </footer>
      </div>
    );
  };



export default About

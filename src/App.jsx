import { Link } from "react-router-dom"
import Contact from './Contact';

const Title = () => {
  return (
    <h1>
    </h1>
  )
}

function App() {
  return (
    <div 
      className="bg-light h-100 p-5"
      style={{ color: 'black' }}
      
    >
      <Link className="text-dark" to='./About'>About</Link>
      <br />
      <Link to='./Blog'>{'Blog'}</Link>
      <br />
      <Link to='./Contact'>{'Contact'}</Link>
      <br />
      <Link to='./Projects'>{'Projects'}</Link>
      <Title />
      <div className="landing-page">
            <header className="hero-section">
                <div className="hero-content">
                    <h1>Hi, I'm Duke McClellan</h1>
                    <p>I'm a Full Stack Web Developer passionate about building impactful web applications.</p>
                    <button className="cta-button">View My Work</button>
                </div>
            </header>
            <section className="contact-section">
                <h2>Contact Me</h2>
                <Contact />
            </section>
        </div>
    </div>
  )
}




export default App

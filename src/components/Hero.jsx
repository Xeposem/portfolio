import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-content">
        <h1 className="hero-name">William Du</h1>
        <p className="hero-title">Software Engineer</p>
        <p className="hero-location">Union City, CA</p>
        <p className="hero-bio">
          Building elegant solutions to complex problems.<br />
          Passionate about clean code and great user experiences.
        </p>
        <div className="hero-links">
          <a
            href="https://github.com/Xeposem"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/williamdu"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'
import profileImg from '../assets/profile.jpg'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-inner">
        <div className="hero-photo">
          <div className="photo-shadow" />
          <img src={profileImg} alt="William Du at Mt. Fuji" />
        </div>
        <h1 className="hero-name">William Du</h1>
        <p className="hero-title">Software Engineer</p>
        <p className="hero-location">Union City, CA</p>
        <p className="hero-bio">
          Computer Engineer pushing the boundaries of my mind and body alike - drawn to technologies, from hardware and architecture, to distributed systems and agentic AI.
          Sometimes I use my Computer and Software Engineering Degrees when I'm not playing tennis, challenging my body, or searching for great food.
        </p>
        <div className="hero-actions">
        <a
          href="/portfolio/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          <FaFileAlt /> Resume
        </a>
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
            href="https://linkedin.com/in/WilliamDu712"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import projects from '../data/projects'
import './Home.css'

function Projects() {
  return (
    <div className="home">
      <nav className="navbar">
        <Link to="/" className="nav-logo">WD</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/projects" className="nav-link active">Projects</Link>
        </div>
      </nav>

      <section className="projects-section" style={{ paddingTop: 120 }}>
        <ScrollReveal>
          <h2 className="section-title">All Projects</h2>
          <p className="section-subtitle">A selection of things I've built</p>
        </ScrollReveal>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 120}>
              <ProjectCard project={project} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} William Du. Built with React.</p>
      </footer>
    </div>
  )
}

export default Projects

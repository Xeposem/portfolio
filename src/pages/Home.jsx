import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import projects from '../data/projects'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <nav className="navbar">
        <span className="nav-logo">WD</span>
        <div className="nav-links">
          <a href="#hero" className="nav-link active">Home</a>
          <a href="#projects" className="nav-link">Projects</a>
        </div>
      </nav>

      <div id="hero">
        <Hero />
      </div>

      <section id="projects" className="projects-section">
        <ScrollReveal>
          <h2 className="section-title">Featured Projects</h2>
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

export default Home

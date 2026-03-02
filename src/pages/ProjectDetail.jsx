import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa'
import projects from '../data/projects'
import ScrollReveal from '../components/ScrollReveal'
import './ProjectDetail.css'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="detail-page">
        <nav className="navbar">
          <Link to="/" className="nav-logo">WD</Link>
        </nav>
        <div className="detail-not-found">
          <h2>Project not found</h2>
          <Link to="/projects" className="back-btn"><FaArrowLeft /> Back to Projects</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="detail-page">
      <nav className="navbar">
        <Link to="/" className="nav-logo">WD</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/projects" className="nav-link active">Projects</Link>
        </div>
      </nav>

      <div className="detail-container">
        <div className="detail-left">
          <ScrollReveal>
            <Link to="/projects" className="back-btn">
              <FaArrowLeft /> Back to Projects
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="detail-title">{project.title}</h1>
            <p className="detail-subtitle">{project.subtitle}</p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="detail-description">{project.description}</p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <h3 className="detail-stack-label">Tech Stack</h3>
            <div className="detail-tags">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="detail-tag"
                  style={{
                    background: `${project.color}15`,
                    color: project.color,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-btn"
            >
              View Repository <FaExternalLinkAlt size={12} />
            </a>
          </ScrollReveal>
        </div>

        <div className="detail-right">
          <ScrollReveal delay={200}>
            <div
              className="detail-preview"
              style={{ background: `${project.color}10`, borderColor: `${project.color}30` }}
            >
              <span className="preview-icon" style={{ color: `${project.color}60` }}>
                {project.icon}
              </span>
              <span className="preview-label">Project Preview</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail

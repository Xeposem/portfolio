import { Link } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard({ project, index }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <div
        className="card-thumbnail"
        style={{ background: `${project.color}15` }}
      >
        {project.image ? (
          <img src={project.image} alt={project.title} className="card-image" />
        ) : (
          <span
            className="card-icon"
            style={{ color: `${project.color}80` }}
          >
            {project.icon}
          </span>
        )}
      </div>
      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.subtitle}</p>
        <div className="card-tags">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="card-tag"
              style={{
                background: `${project.color}15`,
                color: project.color,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard

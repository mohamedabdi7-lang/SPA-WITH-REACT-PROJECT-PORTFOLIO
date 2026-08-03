import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <Link 
      to={`/project/${project.id}`}
      className="project-card"
    >
      <div className="project-card-image">
        <img 
          src={project.image} 
          alt={project.title}
          loading="lazy"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <span className="project-card-badge">{project.category}</span>
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>
        
        <div className="project-card-tags">
          {project.tech.slice(0, 3).map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
          {project.tech.length > 3 && (
            <span className="tag-more">+{project.tech.length - 3}</span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
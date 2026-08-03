import { useParams, Link, useNavigate } from 'react-router-dom'
import { useProjects } from '../context/ProjectContext'

function ProjectDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { projects, deleteProject, setIsFormOpen, setEditingProjectId } = useProjects()
  
  const project = projects.find(p => p.id === Number(id))

  if (!project) {
    return (
      <div className="container not-found animate-fade-in">
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="btn-primary">Back to Projects</Link>
      </div>
    )
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      deleteProject(project.id)
      navigate('/')
    }
  }

  const handleEdit = () => {
    setEditingProjectId(project.id)
    setIsFormOpen(true)
  }

  return (
    <div className="animate-fade-in">
      <div className="detail-hero">
        <img 
          src={project.image} 
          alt={project.title}
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <div className="detail-hero-overlay" />
        
        <Link to="/" className="detail-back">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>

        <div className="detail-hero-content container">
          <span className="detail-badge">{project.category}</span>
          <h1 className="detail-title">{project.title}</h1>
        </div>
      </div>

      <div className="container detail-layout">
        <div>
          <div className="detail-section">
            <h2>Description</h2>
            <p>{project.description}</p>
          </div>

          <div className="detail-section">
            <h2>Technologies</h2>
            <div className="detail-tags">
              {project.tech.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <aside className="detail-sidebar">
          <h3>Project Info</h3>
          
          <div className="sidebar-item">
            <span>Date</span>
            <p>{new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {project.link && (
            <div className="sidebar-item">
              <span>Live Demo</span>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Live →</a>
            </div>
          )}

          {project.github && (
            <div className="sidebar-item">
              <span>Source Code</span>
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub →</a>
            </div>
          )}

          <hr className="sidebar-divider" />

          <div className="sidebar-actions">
            <button onClick={handleEdit} className="btn-secondary">Edit Project</button>
            <button onClick={handleDelete} className="btn-danger">
              Delete Project
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default ProjectDetailPage
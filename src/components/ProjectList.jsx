import { useProjects } from '../context/ProjectContext'
import ProjectCard from './ProjectCard'

function ProjectList() {
  const { filteredProjects, projects } = useProjects()

  if (filteredProjects.length === 0) {
    return (
      <div className="empty-state animate-fade-in">
        <svg className="empty-state-icon" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3>No projects found</h3>
        <p>
          {projects.length === 0 
            ? "Get started by adding your first project using the button above."
            : "Try adjusting your search terms or filter criteria to find what you're looking for."}
        </p>
      </div>
    )
  }

  return (
<div className="project-grid animate-slide-up">      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectList
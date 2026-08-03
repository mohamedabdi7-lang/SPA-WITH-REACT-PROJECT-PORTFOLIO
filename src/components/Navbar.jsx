import { Link } from 'react-router-dom'
import { useProjects } from '../context/ProjectContext'

/**
 * Navigation bar component
 * Sticky header using index.css navbar classes
 */
function Navbar() {
  const { setIsFormOpen } = useProjects()

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        {/* Logo / Brand */}
        <Link to="/" className="navbar-brand">
          Portfolio
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className="navbar-link">
            Projects
          </Link>
          <button
            onClick={() => setIsFormOpen(true)}
            className="btn-primary"
            aria-label="Add new project"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Project
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
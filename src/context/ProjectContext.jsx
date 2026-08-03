import { createContext, useContext, useState, useCallback, useMemo } from 'react'
import { initialProjects } from '../data/initialProjects'
import useLocalStorage from '../hooks/useLocalStorage'

/**
 * ProjectContext - Global state management for projects
 * Uses Context API + useReducer pattern for scalable state management
 * Persists data to localStorage via custom hook
 */
const ProjectContext = createContext(null)

export function ProjectProvider({ children }) {
  // Initialize state from localStorage or fallback to initial data
  const [projects, setProjects] = useLocalStorage('portfolio-projects', initialProjects)
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingProjectId, setEditingProjectId] = useState(null)

  /**
   * Add a new project to the portfolio
   * @param {Object} project - New project data
   */
  const addProject = useCallback((project) => {
    const newProject = {
      ...project,
      id: Date.now(), // Generate unique ID
      date: new Date().toISOString().split('T')[0],
    }
    setProjects(prev => [newProject, ...prev])
  }, [setProjects])

  /**
   * Update an existing project
   * @param {number} id - Project ID to update
   * @param {Object} updatedData - New data for the project
   */
  const updateProject = useCallback((id, updatedData) => {
    setProjects(prev => prev.map(p => (p.id === id ? { ...p, ...updatedData, id: p.id, date: p.date } : p)))
  }, [setProjects])

  /**
   * Delete a project by ID
   * @param {number} id - Project ID to delete
   */
  const deleteProject = useCallback((id) => {
    setProjects(prev => prev.filter(p => p.id !== id))
  }, [setProjects])

  /**
   * Get filtered projects based on search and category
   */
  const filteredProjects = useMemo(() => projects.filter(project => {
    const lowercasedQuery = searchQuery.toLowerCase()
    const matchesSearch = !searchQuery || 
      project.title.toLowerCase().includes(lowercasedQuery) ||
      project.description.toLowerCase().includes(lowercasedQuery) ||
      project.tech.some(t => t.toLowerCase().includes(lowercasedQuery))
    
    const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter
    
    return matchesSearch && matchesCategory
  }), [projects, searchQuery, categoryFilter])

  const value = {
    projects,
    filteredProjects,
    searchQuery,
    setSearchQuery,
    categoryFilter,
    setCategoryFilter,
    isFormOpen,
    setIsFormOpen,
    addProject,
    deleteProject,
    updateProject,
    editingProjectId,
    setEditingProjectId,
  }

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  )
}

/**
 * Custom hook to consume ProjectContext
 * Throws error if used outside Provider
 */
export function useProjects() {
  const context = useContext(ProjectContext)
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider')
  }
  return context
}
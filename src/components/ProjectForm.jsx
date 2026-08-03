import { useState, useEffect } from 'react'
import { useProjects } from '../context/ProjectContext'
import { categories } from '../data/initialProjects'

const INITIAL_STATE = {
  title: '',
  description: '',
  tech: '',
  category: categories[0],
  image: '',
  link: '',
  github: ''
}

function ProjectForm() {
  const {
    isFormOpen,
    setIsFormOpen,
    addProject,
    updateProject,
    editingProjectId,
    setEditingProjectId,
    projects
  } = useProjects()

  const [formData, setFormData] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})

  const isEditMode = editingProjectId !== null

  useEffect(() => {
    if (isEditMode && isFormOpen) {
      const projectToEdit = projects.find(p => p.id === editingProjectId)
      if (projectToEdit) {
        setFormData({ ...projectToEdit, tech: projectToEdit.tech.join(', ') })
      }
    }
  }, [isEditMode, editingProjectId, projects, isFormOpen])

  const handleClose = () => {
    setIsFormOpen(false)
    setEditingProjectId(null)
    setFormData(INITIAL_STATE)
    setErrors({})
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.title.trim()) newErrors.title = 'Title is required'
    const trimmedDescription = formData.description.trim()
    if (!trimmedDescription) {
      newErrors.description = 'Description is required'
    } else if (trimmedDescription.length < 20) {
      newErrors.description = 'Description must be at least 20 characters'
    }
    if (!formData.tech.trim()) newErrors.tech = 'At least one technology is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const projectData = {
      ...formData,
      tech: formData.tech.split(',').map(t => t.trim()).filter(t => t),
      image: formData.image || 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=500&fit=crop'
    }

    if (isEditMode) {
      updateProject(editingProjectId, projectData)
    } else {
      addProject(projectData)
    }

    handleClose()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  if (!isFormOpen) return null

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && handleClose()}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{isEditMode ? 'Edit Project' : 'Add New Project'}</h2>
          <button onClick={handleClose} className="modal-close" aria-label="Close form">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-body">
          <div className="form-group">
            <label htmlFor="title">Project Title <span className="required">*</span></label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input-field"
              placeholder="e.g., E-Commerce Dashboard"
              style={errors.title ? { borderColor: '#dc2626' } : {}}
            />
            {errors.title && <p className="form-error">{errors.title}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description <span className="required">*</span></label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="input-field"
              placeholder="Briefly describe the project..."
              style={errors.description ? { borderColor: '#dc2626' } : {}}
            />
            {errors.description && <p className="form-error">{errors.description}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="tech">
              Technologies <span className="required">*</span>{' '}
              <span style={{ fontWeight: 400, color: 'var(--clr-text-muted)' }}>(comma separated)</span>
            </label>
            <input
              id="tech"
              type="text"
              name="tech"
              value={formData.tech}
              onChange={handleChange}
              className="input-field"
              placeholder="React, Node.js, MongoDB"
              style={errors.tech ? { borderColor: '#dc2626' } : {}}
            />
            {errors.tech && <p className="form-error">{errors.tech}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="input-field"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="image">
              Image URL{' '}
              <span style={{ fontWeight: 400, color: 'var(--clr-text-muted)' }}>(optional)</span>
            </label>
            <input
              id="image"
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="input-field"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="form-row">
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label htmlFor="link">Live URL</label>
              <input
                id="link"
                type="url"
                name="link"
                value={formData.link}
                onChange={handleChange}
                className="input-field"
                placeholder="https://..."
              />
              <label htmlFor="github">GitHub URL</label>
              <input
                id="github"
                type="url"
                name="github"
                value={formData.github}
                onChange={handleChange}
                className="input-field"
                placeholder="https://github.com/..."
              />
            </div>
          </div>

          <button type="submit" className="btn-primary form-submit-btn">
            {isEditMode ? 'Save Changes' : 'Create Project'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProjectForm
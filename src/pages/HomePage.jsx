import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import ProjectList from '../components/ProjectList'
import ProjectForm from '../components/ProjectForm'
import { useProjects } from '../context/ProjectContext'

function HomePage() {
  const { filteredProjects } = useProjects()

  return (
    <div className="animate-fade-in">
      <section className="hero">
        <h1 className="hero-title">Creative Works</h1>
        <p className="hero-subtitle">
          A curated collection of projects showcasing design, development, and creative problem solving.
        </p>
        <SearchBar />
      </section>

      <section className="container" style={{ paddingTop: 'var(--sp-2xl)', paddingBottom: 'var(--sp-2xl)' }}>
        <div className="section-header">
          <h2 className="section-title">
            All Projects
            <span className="section-count">({filteredProjects.length})</span>
          </h2>
          <CategoryFilter />
        </div>

        <ProjectList />
      </section>

      <ProjectForm />
    </div>
  )
}

export default HomePage
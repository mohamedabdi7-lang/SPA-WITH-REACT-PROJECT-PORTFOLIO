import { useProjects } from '../context/ProjectContext'
import { categories } from '../data/initialProjects'

function CategoryFilter() {
  const { categoryFilter, setCategoryFilter } = useProjects()

  const filterOptions = ['all', ...categories]

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {filterOptions.map((category) => (
        <button
          key={category}
          onClick={() => setCategoryFilter(category)}
          className={`btn-filter ${categoryFilter === category ? 'active' : ''}`}
          aria-pressed={categoryFilter === category}
        >
          {category === 'all' ? 'All' : category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
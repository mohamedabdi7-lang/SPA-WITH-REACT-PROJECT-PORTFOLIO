import { useProjects } from '../context/ProjectContext'

/**
 * Search input component
 * Uses existing CSS classes from index.css
 */
function SearchBar() {
  const { searchQuery, setSearchQuery } = useProjects()

  return (
    <div className="search-wrapper">
      <span className="search-icon">
        <svg
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search projects by name, tech, or description..."
        className="input-field"
        aria-label="Search projects"
      />

      {searchQuery && (
        <button
          onClick={() => setSearchQuery('')}
          className="search-clear"
          aria-label="Clear search"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default SearchBar
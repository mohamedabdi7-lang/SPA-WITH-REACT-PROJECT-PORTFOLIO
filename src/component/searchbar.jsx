import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  // handle search input change
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
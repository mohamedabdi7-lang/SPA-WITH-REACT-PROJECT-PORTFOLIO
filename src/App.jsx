import React, { useState } from 'react';
import Header from './component/Header';
import SearchBar from './component/searchbar';
import ProjectForm from './component/projectform';
import ProjectList from './component/projectlist';
import projectcard from  './component/projectcard';

// initial project data
const initialProjects = [
  {
    id: 1,
    title: 'Brand Identity Redesign',
    description: 'Complete brand redesign including logo, color palette, and brand guidelines.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80',
    category: 'Branding',
  },
  {
    id: 2,
    title: 'E-Commerce Mobile App',
    description: 'Shopping app built for mobile devices with easy checkout.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80',
    category: 'Mobile App',
  },
  {
    id: 3,
    title: 'Architecture Portfolio',
    description: 'Web platform designed to showcase architectural blueprints and projects.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80',
    category: 'Web Design',
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Dashboard interface built for data visualization and tracking.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    category: 'UI/UX',
  },
];

function App() {
  // main state for projects and search term
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');

  // add new project to state
  const handleAddProject = (newProject) => {
    setProjects([newProject, ...projects]);
  };

  // filter projects by search term
  const filteredProjects = projects.filter((project) => {
    const term = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(term) ||
      project.category.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term)
    );
  });

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <section className="search-section">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </section>

        <div className="content-layout">
          <section className="form-section">
            <ProjectForm onAddProject={handleAddProject} />
          </section>

          <section className="projects-section">
            <h2>Portfolio Projects</h2>
            <ProjectList projects={filteredProjects} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
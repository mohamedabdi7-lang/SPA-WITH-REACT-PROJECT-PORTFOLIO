import React from 'react';

function ProjectCard({ project }) {
  const { title, description, image, category } = project;

  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <span className="project-category">{category}</span>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;

import React, { useState } from 'react';

function ProjectForm({ onAddProject }) {
  // form state variables
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !image || !category) {
      alert('Please fill in all fields');
      return;
    }

    const newProject = {
      id: Date.now(),
      title: title,
      description: description,
      image: image,
      category: category,
    };

    onAddProject(newProject);

    // clear inputs
    setTitle('');
    setDescription('');
    setImage('');
    setCategory('');
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Add New Project</h2>
      <div className="form-group">
        <label htmlFor="title">Project Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image URL</label>
        <input
          id="image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="submit-btn">
        Add Project
      </button>
    </form>
  );
}

export default ProjectForm;

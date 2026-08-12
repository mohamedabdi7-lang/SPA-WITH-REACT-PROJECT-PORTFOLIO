import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProjectForm from '../components/ProjectForm';

describe('ProjectForm Component', () => {
  it('allows user to type into input fields and submit the form', () => {
    const handleAddProject = vi.fn();
    render(<ProjectForm onAddProject={handleAddProject} />);

    // Get input elements by label text
    const titleInput = screen.getByLabelText('Project Title');
    const categoryInput = screen.getByLabelText('Category');
    const imageInput = screen.getByLabelText('Image URL');
    const descriptionInput = screen.getByLabelText('Description');
    const submitButton = screen.getByRole('button', { name: 'Add Project' });

    // Simulate typing into inputs
    fireEvent.change(titleInput, { target: { value: 'New Mobile App' } });
    fireEvent.change(categoryInput, { target: { value: 'Mobile' } });
    fireEvent.change(imageInput, { target: { value: 'https://via.placeholder.com/150' } });
    fireEvent.change(descriptionInput, { target: { value: 'Cool new mobile application' } });

    // Verify input values updated
    expect(titleInput.value).toBe('New Mobile App');
    expect(categoryInput.value).toBe('Mobile');
    expect(imageInput.value).toBe('https://via.placeholder.com/150');
    expect(descriptionInput.value).toBe('Cool new mobile application');

    // Simulate form submission
    fireEvent.click(submitButton);

    // Verify onAddProject function was called once
    expect(handleAddProject).toHaveBeenCalledTimes(1);
    expect(handleAddProject).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'New Mobile App',
        category: 'Mobile',
        image: 'https://via.placeholder.com/150',
        description: 'Cool new mobile application',
      })
    );
  });
});
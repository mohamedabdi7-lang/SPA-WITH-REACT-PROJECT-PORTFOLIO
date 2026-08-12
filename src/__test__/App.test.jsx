import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Component', () => {
  it('renders the header with agency title', () => {
    render(<App />);
    const headerElement = screen.getByText('Asensio Creative Studio');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders the search bar input', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Search projects...');
    expect(searchInput).toBeInTheDocument();
  });
});

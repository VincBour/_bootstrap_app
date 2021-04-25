import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

// TODO add MemoryRouter in Mock folder

describe('<Navigation />', () => {
  it('should exist', () => {
    expect(Navigation).toBeDefined();
  });
  it('should render', () => {
    render(<MemoryRouter><Navigation /></MemoryRouter>);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});

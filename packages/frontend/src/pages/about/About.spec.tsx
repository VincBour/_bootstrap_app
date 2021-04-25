import * as React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('<About />', () => {
  it('should exist', () => {
    expect(About).toBeDefined();
  });
  it('should render', () => {
    render(<About />);
    expect(screen.getByText('Hello from About')).toBeInTheDocument();
  });
});

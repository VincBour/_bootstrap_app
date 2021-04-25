import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('<Home />', () => {
  it('should exist', () => {
    expect(Home).toBeDefined();
  });
  it('should render', () => {
    render(<Home />);
    expect(screen.getByText('Hello from Home')).toBeInTheDocument();
  });
});

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('<Contact />', () => {
  it('should exist', () => {
    expect(Contact).toBeDefined();
  });
  it('should render', () => {
    render(<Contact />);
    expect(screen.getByText('Hello from Contact')).toBeInTheDocument();
  });
});

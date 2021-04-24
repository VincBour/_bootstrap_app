import * as React from 'react';
import { render, screen } from '@testing-library/react';
import TrainingApp from './TrainingApp';

describe('<TrainingApp />', () => {
  it('should exist', () => {
    expect(TrainingApp).toBeDefined();
  });
  it('should render', () => {
    render(<TrainingApp />);
    expect(screen.getByText('Hello From TrainingApp')).toBeInTheDocument();
  });
});

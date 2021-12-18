import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crash', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hasil/i);
  expect(linkElement).toBeInTheDocument()
  // expect(true).toBe(true);
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TODOs App text', () => {
  render(<App />);
  const h1Element = screen.getByText(/TODOs App/i);
  expect(h1Element).toBeInTheDocument();
});

test('renders @2024 text', () => {
  render(<App />);
  const pElement = screen.getByText(/@2024/i);
  expect(pElement).toBeInTheDocument();
});

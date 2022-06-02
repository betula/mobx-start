import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders todos header', () => {
  render(<App />);
  const linkElement = screen.getByText(/todos/i);
  expect(linkElement).toBeInTheDocument();
});
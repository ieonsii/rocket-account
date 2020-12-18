import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my account header', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Account/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';
import Edit from './components/account/edit';

import { generateAccount } from './config/tests/data/account';

test('renders my account header', () => {
  render(<App />);
  const headingElement = screen.getByText(/My Account/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders edit form', () => {
  render(
    <Edit
      account={generateAccount()}
      setAccount={() => {}}
      setEditMode={() => {}}
    />
  );
  const firstName = screen.getByText(/First Name/i);
  expect(firstName).toBeInTheDocument();
});

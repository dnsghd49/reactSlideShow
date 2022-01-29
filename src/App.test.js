import { render, screen } from '@testing-library/react';
import App from './App';

test('app renders img', () => {
  render(<App />);
  const imgElement = screen.getByRole('img');
  expect(imgElement).toBeInTheDocument();
});

test('Gallery components renders', () => {
  render(<App />);
  const h1Element = screen.getByText(/e-Gall/i);
  expect(h1Element).toBeInTheDocument();
});
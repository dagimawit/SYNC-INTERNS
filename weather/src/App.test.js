import { render, screen } from '@testing-library/react';
import Appp from './Appp';

test('renders learn react link', () => {
  render(<Appp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

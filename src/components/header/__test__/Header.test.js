import { render, screen } from '@testing-library/react';

import Header from '../Header';

it('should render the header', () => {
    render(<Header />);
    const headerElement = screen.getByRole('heading');
    expect(headerElement).toBeVisible();
  });
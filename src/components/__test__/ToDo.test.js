import { render, screen } from '@testing-library/react';

import ToDo from '../ToDo';

it('should render with a delete button', () => {
    render(<ToDo />)
    const deleteButton = screen.queryByRole('button', { name: "x"});
    expect(deleteButton).not.toBeInTheDocument()
})
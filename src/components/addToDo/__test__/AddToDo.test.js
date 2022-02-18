import { render, screen, fireEvent } from '@testing-library/react';

import AddToDO from '../AddToDo'

const mockedOnAdd = jest.fn();

it('should render the add todo input form', () => {
    render(<AddToDO onAdd={mockedOnAdd} />);
    const inputElement = screen.getByPlaceholderText(/What do you need to do?/i);
    expect(inputElement).toBeVisible();
});

it('should change the value of the input when user types', () => {
    render(<AddToDO onAdd={mockedOnAdd} />);
    const inputElement = screen.getByPlaceholderText(/What do you need to do?/i);
    fireEvent.change(inputElement, {
        target: {
            value: "clean the car."
        }
    })
    expect(inputElement.value).toBe("clean the car.");
})

it('should change to empty input when button is clicked', () => {
    render(<AddToDO onAdd={mockedOnAdd} />);
    const inputElement = screen.getByPlaceholderText(/What do you need to do?/i);
    const buttonElement = screen.getByRole('button', { name: /Save/i });

    fireEvent.change(inputElement, {
        target: {
            value: "clean the car."
        }
    })

    fireEvent.click(buttonElement);

    expect(inputElement.value).toBe('');
})
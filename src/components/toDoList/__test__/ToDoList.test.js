import { render, screen, fireEvent } from '@testing-library/react';

import ToDoList from '../ToDoList';

const mockedDelete = jest.fn();

const mockedToDoItems = {
    "toDoList": [
      {
        "formText": "make dinner ",
        "id": 1
      },
      {
        "formText": "take the cat to vet",
        "id": 2
      },
      {
        "formText": "water plants",
        "id": 3
      }
    ]
  }

it('should add the text from the input form to the to do list', async () => {
    render(<ToDoList />);
    const inputElement = screen.getByPlaceholderText(/What do you need to do?/i);
    const saveButtonElement = screen.getByRole('button', { name: 'Save' });
    const divElement = await screen.findByText(/clean the car./i);

    fireEvent.change(inputElement, {
        target: {
            value: "clean the car."
        }
    })

    fireEvent.click(saveButtonElement);

    expect(divElement).toBeInTheDocument();
});


it('should delete a do to from the list', async () => {
    render(<ToDoList />);
    const inputElement = screen.getByPlaceholderText(/What do you need to do?/i);
    const saveButtonElement = screen.getByRole('button', { name: 'Save' });
    const divElement = await screen.findByText(/Water the plants./i);
    const deleteButtonElement = await screen.findByRole('button', { name: 'x' });

    fireEvent.change(inputElement, {
        target: {
            value: "Water the plants."
        }
    })

    fireEvent.click(saveButtonElement);

    fireEvent.click(deleteButtonElement);

    expect(divElement).not.toBeInTheDocument();
});

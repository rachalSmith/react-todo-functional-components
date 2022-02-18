import PropTypes from 'prop-types';

// toDoItems state fetched from database through App.js, mapped
// and each item in the list is given id, the text and delete functionality,
// which is passed as props to toDO child component.

import ToDo from '../toDo/ToDo'

const ToDoList = ({ toDoItems, onDelete }) => {
    return (
        <div data-testid="toDoItems">
            {toDoItems.map((toDo) => (
            <ToDo key={toDo.id}
                  toDo={toDo}
                  onDelete={onDelete}
                />
            ))}
        </div>
    )
}

export default ToDoList;

ToDoList.propTypes = {
    toDoItems : PropTypes.array.isRequired,
    onDelete : PropTypes.func.isRequired
}
// toDo props are passed from App.js, through ToDo.js
// onClick action passed up through ToDo.js to App.js, where it has access to the state.

const ToDo = ({ toDo, onDelete }) => {
    return (
        <div className='task'>
            <h3 >{toDo.formText}
                <button
                    onClick={() => onDelete(toDo.id)}
                    className='deleteButton'>
                    x
                </button>
            </h3>
        </div>
    )
}

export default ToDo;
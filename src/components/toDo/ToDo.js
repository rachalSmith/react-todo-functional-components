import PropTypes from 'prop-types';


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

ToDo.propTypes = {
    toDo : PropTypes.object.isRequired,
    onDelete : PropTypes.func.isRequired
}
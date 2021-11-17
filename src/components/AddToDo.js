import { useState } from "react";

// AddToDO component takes in prop (addToDo) from App.js

const AddToDo = ({ onAdd }) => {
    const [text, setToDoItem] = useState();

    const onSubmit = (event) => {
        event.preventDefault();
        if(!text) {
            alert('Please add a task')
            return
        };

        onAdd({ text });
        setToDoItem('');
    }


    return (
        <form
            className='add-form'
            onSubmit={onSubmit}
            >
            <div className='form-control'>
                <input
                    type='text'
                    placeholder='What do you need to do?'
                    value={text}
                    onChange={(event) => {setToDoItem(event.target.value)}}
                    >
                </input>
                <input
                    className='btn btn-block'
                    type='submit'
                    value='Save'
                    >
                </input>
            </div>
        </form>
    )
}

export default AddToDo;
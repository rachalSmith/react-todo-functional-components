import { useState } from "react";

// AddToDO component takes in prop (addToDo) from App.js

const AddToDo = ({ onAdd }) => {
    const [formText, setFormText] = useState();

    const onSubmit = (event) => {
// Stops submission to a page
        event.preventDefault();
        if(!formText) {
            alert('Please add a to do')
            return
        };

        onAdd({ formText });
// Clears input form of text after submitted as a todo
        setFormText('');
    }


    return (
        <form
            className='add-form'
            onSubmit={onSubmit}
            >
            <div className='form-control'>
                <input
                    className='form-input'
                    type='text'
                    placeholder='What do you need to do?'
                    value={formText}
                    onChange={(event) => {setFormText(event.target.value)}}
                    >
                </input>
                <input
                    className='button'
                    type='submit'
                    value='Save'
                    >
                </input>
            </div>
        </form>
    )
}

export default AddToDo;
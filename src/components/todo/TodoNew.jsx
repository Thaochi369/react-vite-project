import { useState } from 'react';
import './todo.css'

const TodoNew = (props) => {

    const [valueInput,setValueInput] = useState("Mari")

    const { addNewTodo } = props;
    // addNewTodo("name");
 
    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("");
    }

    const handleChange = (name) => {
        setValueInput(name)
    }

    return (
        <>
        <div className='todo-new'>
                <input type="text"
                    placeholder='Enter your task!'
                    onChange={(event) => handleChange(event.target.value )}
                    value={valueInput}
                />
                <button style={{ cursor: 'pointer' }}
                    onClick={handleClick}
                >Add</button>

                <div>
                    My text is {valueInput}
                </div>
        </div>   
        </>
    )
}

export default TodoNew;
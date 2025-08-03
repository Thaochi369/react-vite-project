import { useState } from 'react';
import './todo.css'

const TodoNew = (props) => {

    const [valueInput,setValueInput] = useState("Mari")

    const { addNewTodo } = props;
    // addNewTodo("name");
 
    const handleClick = () => {
       console.log (">>> check valueInput: ",valueInput)
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
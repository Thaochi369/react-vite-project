import './todo.css'

const TodoNew = (props) => {

    const { addNewTodo } = props;
    // addNewTodo("name");

    const handleClick = () => {
        alert("click me")
    }

    const handleChange = (event) => {
        console.log (">>> handleOnchange ",event.target.value)
    }

    return (
        <>
        <div className='todo-new'>
                <input type="text"
                    placeholder='Enter your task!'
                    onChange={handleChange}
                
                />
                <button style={{ cursor: 'pointer' }}
                    onClick={handleClick}
                >Add</button>
        </div>   
        </>
    )
}

export default TodoNew;
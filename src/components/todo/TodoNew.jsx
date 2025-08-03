import './todo.css'

const TodoNew = (props) => {

    const { addNewTodo } = props;
    // addNewTodo("name");

    const handleClick = () => {
        alert("click me")
    }

    const handleChange = (name) => {
        console.log (">>> handleOnchange ", name)
    }

    return (
        <>
        <div className='todo-new'>
                <input type="text"
                    placeholder='Enter your task!'
                    onChange={(event) => handleChange(event.target.value)}
                
                />
                <button style={{ cursor: 'pointer' }}
                    onClick={handleClick}
                >Add</button>
        </div>   
        </>
    )
}

export default TodoNew;
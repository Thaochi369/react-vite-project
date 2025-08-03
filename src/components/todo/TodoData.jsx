import './todo.css'


//
const TodoData = (props) => {

    const { todoList, todoDel } = props;

    const handleClickDel = (id) => {
        console.log(">>> check id", id)
        todoDel(id);
    }
    
    return (
        <>
            <div className='todo-data'>
                {todoList.map((item, index) => {
                    return (
                        <>
                            <div className='todo-item' key={item.id}>
                                <div>{item.name}</div>
                                <button
                                    onClick={ () => handleClickDel(item.id)}
                                >Delete</button>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default TodoData;
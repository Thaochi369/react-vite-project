import './components/todo/todo.css'
import TodoData from './components/todo/TodoData.jsx'
import TodoNew from './components/todo/TodoNew.jsx'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning React" },
    {id: 2, name: "Watching Youtube"}
  ])

  const hoidanit = 'Mari';
  const age = 25;
  const data = {
    address: "hanoi",
    country: "VietNam"
  }

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }

    setTodoList([...todoList, newTodo])
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo = {addNewTodo}
      />
      <TodoData
        name={hoidanit}
        age={age}
        data={data} 
        todoList = {todoList}
      />
      <div className='todo-image'>
        <img className= "logo" src={reactLogo}/>
      </div>
    </div>
  )
}

export default App

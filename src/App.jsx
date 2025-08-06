import './components/todo/todo.css'
import TodoData from './components/todo/TodoData.jsx'
import TodoNew from './components/todo/TodoNew.jsx'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'

const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // {id: 2, name: "Watching Youtube"}
  ])
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

  const todoDel = (id) => {
    const newTodo = todoList.filter(item => item.id !== id)
    setTodoList(newTodo)
  }

  return (
    <>
      <Header/>
       <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo = {addNewTodo}
      />


      {todoList.length === 0 ?
        
        <div className='todo-image'>
          <img className="logo" src={reactLogo} />
        </div>
        :
        <TodoData
          todoList={todoList}
          todoDel = {todoDel}
        />
      }
      </div>
      <Footer/>
    </>
  )
}

export default App

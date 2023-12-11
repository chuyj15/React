import React from 'react'
import './Todo.css'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const TodoContainer = () => {
  return (
    <div className='Wrap'>
        <div className='container'>
        <TodoHeader/>
        <TodoInput/>
        <TodoList/>
        <TodoFooter/>
        </div>
    </div>
  )
}

export default TodoContainer
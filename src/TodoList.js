import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, todoToggle}) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.id} todoToggle={todoToggle}/>)
}

export default TodoList
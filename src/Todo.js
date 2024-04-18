import React from 'react'

const Todo = ({todo, todoToggle}) => {
  const handleTodoClick = () => {
    todoToggle(todo.id);
  }
  return (
    <div>
        <label>
            <input type="checkbox" checked={todo.completed} onChange={handleTodoClick} readOnly></input>
        </label>
        {todo.name}
    </div>
  )
}

export default Todo
import React from 'react'

const Todo = ({todo}) => {
  return (
    <div>
        <label>
            <input type="checkbox" checked={todo.completed} readOnly></input>
        </label>
        {todo.name}
    </div>
  )
}

export default Todo
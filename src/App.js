import { useState, useRef } from "react";
import TodoList from "./TodoList";
import {v4 as uuidv4} from 'uuid'

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const todoToggle = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, {id:uuidv4(), name, completed:false}]
    })
    todoNameRef.current.value = null;
  };

  const handleDeleteTodo = () => {
    const newtodos = [...todos];
    const notCompletedTodos = newtodos.filter((todo) => !todo.completed);
    setTodos(notCompletedTodos);
  }


  return (
    <>
      <TodoList todos={todos} todoToggle={todoToggle}/>
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleDeleteTodo}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

export default App;

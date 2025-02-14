import React, { useState } from "react";
import "./App.css";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo(""); // Clear the input field
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todolist">
      <h1>My To-Do List</h1>
      <div className="input-container">
        <span>task :</span>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo..."
        />

        <button onClick={addTodo} className="btn">
          Add
        </button>
      </div>
      <div>
        <ol>
          {todos.map((todo, index) => (
            <li
              key={index}
              style={{ borderColor: todo.completed ? "green" : "white" }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  textDecorationColor: todo.completed ? "green" : "none",
                }}
              >
                {todo.text}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default TodoList;

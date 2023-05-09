import React, { useState } from "react";
import "./styles.css";
import NewTodoForm from "./NewTodoForm";
const App = () => {
  const [todos, SetTodos] = useState([]);

  function addTodo(title) {
    SetTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  }
  function toggleToDo(id, completed) {
    SetTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  function deleteTodo(id) {
    SetTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  //SetNewItem("salem"); //Infinite loop
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleToDo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;

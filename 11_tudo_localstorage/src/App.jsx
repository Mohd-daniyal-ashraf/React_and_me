import { useEffect, useInsertionEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context/index.js";
import TodoForm from "./componant/todoform.jsx";
import TodoItem from "./componant/todoitem.jsx";
function App() {
  let [todos, setTodos] = useState([]);
  let addTodo = (todo) => {
    setTodos((oldtodo) => [{ id: Date.now(), ...todo }, ...oldtodo]);
  };

  const updateTodo = (id, todo) => {
    setTodos((oldtodo) =>
      oldtodo.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((oldtodo) => oldtodo.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((oldtodo) =>
      oldtodo.map((prevtodo) =>
        prevtodo.id === id
          ? { ...prevtodo, completed: !prevtodo.completed }
          : prevtodo
      )
    );
  };

  // For getting the data
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // For getting the data
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/*Loop form here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
            {/* Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;

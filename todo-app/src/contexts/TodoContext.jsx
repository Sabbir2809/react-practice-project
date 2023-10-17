import { createContext, useContext, useState } from "react";

// step-1: create context
const TodoContext = createContext(null);

// step-2: useContext direct export
export const useTodo = () => {
  return useContext(TodoContext);
};
// step-3: context provider
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // add todo
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  // update todo
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  };

  // delete todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // toggle complete
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    );
  };

  const value = { todos, setTodos, addTodo, updateTodo, deleteTodo, toggleComplete };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

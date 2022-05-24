import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTodos();
  }, []);

  const storeTodos = async (todo, cb) => {
    try {
      const todos = await AsyncStorage.getItem("todos");
      const parsedTodos = todos !== null ? JSON.parse(todos) : [];
      const updatedTodos = [todo, ...parsedTodos];
      await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
      cb();
    } catch (e) {
      console.log(e);
    }
  };

  const getTodos = async () => {
    try {
      const todos = await AsyncStorage.getItem("todos");
      const parsedTodos = todos !== null ? JSON.parse(todos) : [];
      setLoading(false);
      setTodos(parsedTodos);
      setError(null);
    } catch (e) {
      setLoading(false);
      setTodos([]);
      setError(e);
    }
  };

  const updateTodo = async (id, cb) => {
    try {
      const todos = await AsyncStorage.getItem("todos");
      const parsedTodos = todos !== null ? JSON.parse(todos) : [];
      const updatedTodos = parsedTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: todo.status === "complete" ? "uncomplete" : "complete",
          };
        }
        return todo;
      });
      await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
      cb();
    } catch (e) {
      console.log(e);
    }
  };

  const deleteTodo = async (id, cb) => {
    try {
      const todos = await AsyncStorage.getItem("todos");
      const parsedTodos = todos !== null ? JSON.parse(todos) : [];
      const updatedTodos = parsedTodos.filter((todo) => todo.id !== id);
      await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
      cb();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        todos,
        error,
        storeTodos,
        getTodos,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

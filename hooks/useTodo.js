import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const useTodo = () => {
  return useContext(TodoContext);
};

export default useTodo;

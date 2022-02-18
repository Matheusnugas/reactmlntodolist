import React, { useState } from "react";
import TodoContext from "./TodoContext";

const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  const context = { todoList, setTodoList };

  return (
    <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider as Provider };

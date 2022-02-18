import React, { useContext, useState } from "react";
import TodoContext from "../Context/TodoContext";
import "./ToDoInput.css";

const ToDoInput = () => {
  const [todoInput, setTodoInput] = useState({
    todo: "",
    index: 0,
  });
  const { todoList, setTodoList } = useContext(TodoContext);

  const handleInputChange = ({ target }) => {
    setTodoInput({ ...todoInput, todo: target.value });
  };

  const handleAddClick = () => {
    const object = { todo: todoInput.todo, index: todoList.length };
    setTodoList([...todoList, object]);
    setTodoInput({ ...todoInput, todo: "" });
  };

  return (
    <div className="inputMain">
      <div className="inputWrap">
        <label htmlFor="todoInput">
          Add a new task:
          <input
            value={todoInput.todo}
            type="text"
            id="todoInput"
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button disabled={!todoInput.todo} type="button" onClick={handleAddClick}>
        Save Task
      </button>
    </div>
  );
};

export default ToDoInput;

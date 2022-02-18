import React, { useContext } from "react";
import Task from "../components/Task";
import ToDoInput from "../components/ToDoInput";
import TodoContext from "../Context/TodoContext";
import "./ToDoPage.css";

const ToDoPage = () => {
  const { todoList } = useContext(TodoContext);
  return (
    <div className="toDoListMain">
      <div className="content">
        <div className="inputContainer">
          <ToDoInput />
        </div>
        <div className="listDiv">
          <ul>
            {todoList.map((todo, index) => {
              return <Task key={index} taskTodo={todo} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDoPage;

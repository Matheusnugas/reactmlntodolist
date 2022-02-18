import React, { useContext, useState } from "react";
import TodoContext from "../Context/TodoContext";

const Task = (props) => {
  const { taskTodo } = props;
  const { todoList, setTodoList } = useContext(TodoContext);
  const [edit, setEdit] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ todo: "", index: 0 });

  const handleInputChange = ({ target }) => {
    setEditedTodo({ todo: target.value });
  };

  const editTodo = () => {
    setEdit(true);
  };

  const saveEditedTodo = () => {
    const oldTaskList = todoList.filter((task) => task.todo !== taskTodo.todo);
    const object = { todo: editedTodo.todo, index: taskTodo.index };
    const listToSave = [object, ...oldTaskList].sort(
      (a, b) => a.index - b.index
    );
    setTodoList(listToSave);
    setEdit(false);
  };

  const deleteTask = () => {
    const newTaskList = todoList.filter((task) => task !== taskTodo);
    setTodoList(newTaskList);
  };

  const handleDone = (event) => {
    if (event.target.classList.contains("done")) {
      event.target.classList.remove("done");
      event.target.classList.add("notDone");
    } else {
      event.target.classList.add("done");
      event.target.classList.remove("notDone");
    }
  };

  return edit ? (
    <li className="taskItem">
      <input
        type="text"
        id="editInput"
        value={editedTodo.todo}
        onChange={handleInputChange}
      />
      <button
        className="liButton"
        onClick={saveEditedTodo}
        disabled={!editedTodo.todo}
      >
        Save Edit
      </button>
    </li>
  ) : (
    <li className="taskItem">
      <span className="notDone" onClick={handleDone}>
        {taskTodo.todo}
      </span>
      <div className="buttonWrap">
        <button className="liButton" onClick={deleteTask}>
          Delete Task
        </button>
        <button className="liButton" onClick={editTodo}>
          Edit Task
        </button>
      </div>
    </li>
  );
};

export default Task;

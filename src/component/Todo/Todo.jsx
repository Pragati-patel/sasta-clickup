import React, { useState } from "react";
import "./Todo.css";
import "../../Global.css";
import { AiOutlineRight } from "react-icons/ai";

export default function Todo({ data: todo, addTask, changeStatus }) {
  const [input, setInput] = useState("");
  const [showButton, SetShowButton] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
    SetShowButton(true);
    if (!e.target.value) {
      SetShowButton(false);
    }
  };

  const handleOnClick = () => {
    // setTask({...task, todo: [...task.todo, input]})
    addTask(input);
    setInput("");
      SetShowButton(false);
  };

  return (
    <div className="todo_wrap">
      <h1 className="todo_heading">Todo</h1>
      <ul className="todo_list">
        {todo?.map((i, index) => {
          return (
            <li key={index}>
              {i.task}{" "}
              <AiOutlineRight
                size={"1rem"}
                className="list_arrow"
                onClick={() => changeStatus("todo", "inprogress", index)}
              />
            </li>
          );
        })}
      </ul>
      <div className="todo_input_wrap">
        <input
          type="text"
          placeholder="+ Add Task"
          className="add_task_input"
          onChange={handleChange}
          value={input}
        />
        {showButton ? (
          <button className="add_task_btn" onClick={handleOnClick} id="addBtn">
            Save
          </button>
        ) : null}
      </div>
    </div>
  );
}

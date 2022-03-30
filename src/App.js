import { useState, useEffect } from "react";
import "./App.css";
import Todo from "./component/Todo/Todo";
import Completed from "./component/Completed/Completed";
import InProgress from "./component/InProgress/InProgress";
import moment from "moment";

function App() {
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("task")) || {
      todo: [{ task: "task-1" }],
      inprogress: [],
      completed: [],
    }
  );
  const addTask = (input) => {
    setTask({ ...task, todo: [...task.todo, { task: input }] });
  };
  const changeStatus = (currentStage, nextStage, itemIndex) => {
    const updatedItem = task[currentStage].splice(itemIndex, 1);
    if (nextStage === "inprogress") {
      updatedItem[0].startTime = moment();
    }

    if (nextStage === "completed") {
      updatedItem[0].endTime = moment();
      updatedItem[0].timeTaken = moment().from(updatedItem[0].startTime);
    }
    setTask({
      ...task,
      [nextStage]: [...task[nextStage], ...updatedItem],
    });
  };
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <div className="AppWrap">
      <div>
        <Todo data={task.todo} addTask={addTask} changeStatus={changeStatus} />
      </div>
      <div>
        <InProgress data={task.inprogress} changeStatus={changeStatus} />
      </div>
      <div>
        <Completed data={task.completed} />
      </div>
    </div>
  );
}

export default App;

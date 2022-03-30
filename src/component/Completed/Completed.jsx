import moment from "moment";
import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import "../../Global.css";
import "./Completed.css";

export default function Completed({ data: completed }) {
  return (
    <div className="completed_wrap">
      <h1 className="completed_heading">Completed</h1>
      <ul className="completed_list">
        {completed?.map((i, index) => {
          return (
            <li key={index}>
              <div className="icon__div">
                <IoCheckmarkDoneCircle
                  size={"1rem"}
                  className="completed_icon"
                />
              </div>
              <div className="task__div">{i.task}</div>
              <div className="start_time">

                <p>{moment(i.startTime).format("ll")}</p>
                <p>{moment(i.startTime).format("LT")}</p>
              </div>
              <div className="end_time">
                <p>{moment(i.endTime).format("ll")}</p>
                <p>{moment(i.endTime).format("LT")}</p>
              </div>
              <div className="time_taken">
                <p>{i.timeTaken}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

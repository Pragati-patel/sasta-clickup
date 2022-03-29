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
              <IoCheckmarkDoneCircle size={"1rem"} className="completed_icon" />
              {i.task}--
              {moment(i.startTime).format("lll")}--
              {moment(i.endTime).format("lll")}##
              {i.timeTaken}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import React from "react";
import "./InProgress.css";
import "../../Global.css";
import { BsCheckAll } from "react-icons/bs";
import moment from "moment";

export default function InProgress({ data: inprogress, changeStatus }) {
  return (
    <div className="inprogress_wrap">
      <h1 className="inprogress_heading">In Progress</h1>
      <ul className="inprogress_list">
        {inprogress?.map((i, index) => {
          return (
            <li key={index}>
              {i.task} {moment(i.startTime).format("lll")}
              <BsCheckAll
                size={"1.2rem"}
                className="complete_tick"
                onClick={() => {
                  changeStatus("inprogress", "completed", index);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import React, { useState } from "react";
import "./task.css";
import { HiDotsVertical } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import Edit from "../editTask/Edit";
import Delete from "../delete/Delete";
import { selectNoOfFilteredTasks, selectTask } from "../../features/task/tasks";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [openOptions, setOpenOptions] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  //this will use for getting no of filtered tasks and it gives border green to filtered tasks
  const noOfFilteredTasks = useSelector(selectNoOfFilteredTasks);
  const tasks = useSelector(selectTask);
  const currentTaskIndex = tasks.indexOf(task);

  return (
    <div
      className="cardBody"
      style={{
        border: `${
          currentTaskIndex < noOfFilteredTasks
            ? "3px solid green"
            : "1px solid gray"
        }`,
      }}
    >
      <div className="flex">
        <div>{task.title}</div>
        <div className="priority">{task.Priority}</div>
      </div>

      <small className="desc">{task.description}</small>

      <div className="flex z-index p-tb">
        <div className="z-index">
          @{task.assignees === "" ? "-" : task.assignees}
        </div>
        <HiDotsVertical
          style={{
            backgroundColor: "blue",
            padding: "5px",
            color: "aquamarine",
          }}
          className="z-index"
          onClick={() => setOpenOptions(!openOptions)}
        />
        {openOptions && (
          <div className="options">
            <p onClick={() => setOpenEdit(true)}>edit</p>
            {openEdit && (
              <div className="blur">
                <Edit task={task} setOpenEdit={setOpenEdit} />
              </div>
            )}
            <p onClick={() => setOpenDelete(true)}>delete</p>
            {openDelete && (
              <div className="blur">
                <Delete task={task} setOpenDelete={setOpenDelete} />
              </div>
            )}
          </div>
        )}
      </div>
      <div>
        <button className="button">Assign</button>
      </div>
    </div>
  );
};

export default Task;

import React from "react";
import "./delete.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../features/task/tasks";
const Delete = ({ task, setOpenDelete }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask({ id: task.id }));
  };
  return (
    <div className="deleteTaskContainer">
      <div className="flex gap">
        <h2>Delete Task</h2>
        <IoMdCloseCircleOutline onClick={() => setOpenDelete(false)} />
      </div>
      <h5>Do you wish to delete task</h5>
      <div className="flex">
        <h3>{task.title}</h3>
        <div className="flex gap10">
          <button className="button" onClick={handleDelete}>
            Yes
          </button>
          <button className="button" onClick={() => setOpenDelete(false)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;

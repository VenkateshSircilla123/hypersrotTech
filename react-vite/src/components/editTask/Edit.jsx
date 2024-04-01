import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { updateTask } from "../../features/task/tasks";
import { store } from "../../app/store";
import "./edit.css";

const Edit = ({ task, setOpenEdit }) => {
  const [editedTask, setEditedTask] = useState(task);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setEditedTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    dispatch(updateTask({ id: task.id, editedTask }));
  };

  return (
    <div className="absolute editContainer">
      <div className="flex">
        <h2>Edit Task</h2>
        <IoMdCloseCircleOutline onClick={() => setOpenEdit(false)} />
      </div>
      <h5>Title:</h5>
      <input type="text" name="" className="inp" value={task.title} readOnly />
      <h5>description:</h5>
      <input
        type="text"
        name=""
        className="inp"
        value={task.description}
        readOnly
      />
      <h5>team:</h5>
      <input type="text" name="" className="inp" value={task.team} readOnly />
      <h5>assignees:</h5>
      <input
        type="text"
        name=""
        className="inp"
        value={task.assignees}
        readOnly
      />
      <div className="flex">
        <h5>Priority:</h5>
        <select name="" className="Priority" onChange={handleChange}>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>
        <h5>Status:</h5>
        <select name="status" className="Priority" onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Deployed">Deployed</option>
          <option value="Deffered">Deffered</option>
        </select>
      </div>
      <button onClick={handleEdit}>submit</button>
    </div>
  );
};

export default Edit;

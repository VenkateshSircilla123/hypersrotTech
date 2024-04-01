import React, { useState } from "react";
import "./add.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addTask, selectTask } from "../../features/task/tasks";
const Add = ({ setOpen, open }) => {
  const [task, setTask] = useState([]);
  const dispatch = useDispatch();
  const tasks = useSelector(selectTask);
  const handleChange = (e) => {
    setTask({
      ...task,
      Priority: "P0",
      [e.target.name]: e.target.value,
      id: Date.now(),
      date: new Date(),
      status: "Pending",
    });
  };
  const handleAdd = () => {
    setTask({ ...task, id: Date.now() });
    dispatch(addTask(task));
    setOpen(!open);
  };
  return (
    <div className="blur">
      <div className="addNewTaskContainer">
        <div className="flex" style={{ padding: "10px 20px" }}>
          <h4>create a task</h4>
          <IoMdCloseCircleOutline onClick={() => setOpen(!open)} />
        </div>
        <div className="addTaskBody" style={{ padding: "10px 20px" }}>
          <div className="flex">
            <p>Title:</p>
            <input type="text" name="title" id="" onChange={handleChange} />
          </div>
          <div className="flex">
            <p>Description:</p>
            <textarea
              name="description"
              id=""
              cols="21"
              rows="4"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex">
            <p>Team:</p>
            <input type="text" name="team" id="" onChange={handleChange} />
          </div>
          <div className="flex">
            <p>Assignees:</p>
            <input type="text" name="assignees" id="" onChange={handleChange} />
          </div>
          <div className="flex">
            <h5>Priority:</h5>
            <select name="Priority" id="" onChange={handleChange}>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>
          <button className="button" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;

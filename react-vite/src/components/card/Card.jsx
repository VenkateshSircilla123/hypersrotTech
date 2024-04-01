import React, { useEffect, useState } from "react";
import "./card.css";
import { useSelector } from "react-redux";
import { selectTask } from "../../features/task/tasks";
import Task from "../task/Task";

const Card = ({ status, color }) => {
  const tasks = useSelector(selectTask);
  const [filteredStatus, setFilteredStatus] = useState([]);

  useEffect(() => {
    setFilteredStatus(tasks.filter((task) => task?.status === status));
  }, [tasks]);

  return (
    <div className="cardContainer">
      <div className="status" style={{ backgroundColor: color }}>
        <span>{status}</span>
      </div>
      {filteredStatus.length != 0 && (
        <div className="allTasks">
          {filteredStatus.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;

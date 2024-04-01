import React from "react";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/Card";
import Filters from "../components/filters/Filters";
import { useSelector } from "react-redux";
import { selectTask } from "../features/task/tasks";

const Dashboard = () => {
  const tasks = useSelector(selectTask);

  return (
    <div className="">
      <Navbar />
      <div className="bodyContainer">
        <Filters />
        <div className="flex cardsContainer">
          <Card status="Pending" color="gray" />
          <Card status="In Progress" color="orange" />
          <Card status="Completed" color="green" />
          <Card status="Deployed" color="purple" />
          <Card status="Deffered" color="#d67ed6" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

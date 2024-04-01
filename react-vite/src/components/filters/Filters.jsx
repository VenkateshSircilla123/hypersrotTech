import React, { useState } from "react";
import "./filters.css";
import { useDispatch, useSelector } from "react-redux";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { CiCalendarDate } from "react-icons/ci";

import {
  addTask,
  filterAssigneesTasks,
  filterDates,
  filterPriorityTasks,
  selectTask,
  sortTasks,
} from "../../features/task/tasks";
import Add from "../add/Add";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
const Filters = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [priority, setPriority] = useState("");
  const [assignees, setAssignees] = useState("");
  const [sort, setSort] = useState("");
  const [showDate, setShowDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleFilter = () => {
    dispatch(sortTasks({ sort: sort }));
    dispatch(
      filterDates({
        startDate: format(dates[0].startDate, "dd/MM/yyyy"),
        endDate: format(dates[0].endDate, "dd/MM/yyyy"),
      })
    );
    dispatch(filterPriorityTasks({ Priority: priority }));
    dispatch(filterAssigneesTasks({ assignees: assignees }));
  };

  return (
    <div>
      <div className="flex filtersContainer">
        <div className="flex filterInputs" style={{ gap: "10px" }}>
          <h5>Filter By:</h5>
          <input
            type="text"
            className="Assignee"
            placeholder="Assignee name"
            name="assignees"
            onChange={(e) => setAssignees(e.target.value)}
          />
          <select
            name="Priority"
            className="Priority"
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Priority</option>
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
          <span
            onClick={() => setShowDate(!showDate)}
            className="flex datesContainer"
          >
            <p>{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
              dates[0].endDate,
              "dd/MM/yyyy"
            )}`}</p>
            <CiCalendarDate />
          </span>
          {showDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dates}
              className="date"
            />
          )}
        </div>
        <button className="button" onClick={() => setOpen(!open)}>
          Add New Task
        </button>
        {open && (
          <>
            <Add setOpen={setOpen} open={open} />
          </>
        )}
      </div>
      <div className="flex sortContainer">
        <h5>Sort By:</h5>
        <select
          name="Priority"
          className="Priority"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Priority</option>
          <option value="asc">P0,P1,P2</option>
          <option value="dec">P2,P1,P0</option>
        </select>
        <button className="button" onClick={handleFilter}>
          get
        </button>
      </div>
    </div>
  );
};

export default Filters;

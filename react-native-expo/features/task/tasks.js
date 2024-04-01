import { createSlice } from "@reduxjs/toolkit";
import { defaultTasks } from "../../db/db.js";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    loading: false,
    tasks: defaultTasks,
    error: "",
    noOfFilteredTasks: 0,
  },
  reducers: {
    addTask: (state = initialState, action) => {
      state.tasks.unshift(action.payload);
    },
    updateTask: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );

      if (taskIndex !== -1) {
        state.tasks[taskIndex] = action.payload.editedTask;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id != action.payload.id);
    },
    filterPriorityTasks: (state, action) => {
      try {
        //filter priority tasks
        const filteredPriorityTasks = state.tasks.filter(
          (task) => task.Priority === action.payload?.Priority
        );
        const remainingPriorityTasks = state.tasks.filter(
          (task) => task.Priority !== action.payload?.Priority
        );
        state.noOfFilteredTasks = filteredPriorityTasks.length;

        if (filteredPriorityTasks.length != 0) {
          state.tasks.length = 0;
          // Add filtered tasks to the beginning of the array
          state.tasks.push(...filteredPriorityTasks);
          // Add remaining tasks after filtered tasks
          state.tasks.push(...remainingPriorityTasks);
        }
      } catch (error) {
        alert(error.message);
      }
    },
    sortTasks: (state, action) => {
      try {
        if (action.payload.sort === "asc") {
          state.tasks.sort((a, b) => {
            const priorityOrder = { P0: 0, P1: 1, P2: 2 }; // Priority order for sorting
            return priorityOrder[a.Priority] - priorityOrder[b.Priority];
          });
        }
        if (action.payload.sort === "dec") {
          state.tasks.sort((a, b) => {
            const priorityOrder = { P0: 0, P1: 1, P2: 2 }; // Priority order for sorting
            return priorityOrder[b.Priority] - priorityOrder[a.Priority];
          });
        }
        state.noOfFilteredTasks = state.tasks.length;
      } catch (error) {
        alert(error.message);
      }
    },
    filterAssigneesTasks: (state, action) => {
      try {
        //filter assignees tasks
        const filteredAssigneesTasks = state.tasks.filter(
          (task) => task.assignees === action.payload?.assignees
        );
        const remainingAssigneesTasks = state.tasks.filter(
          (task) => task.assignees !== action.payload?.assignees
        );
        state.noOfFilteredTasks = filteredAssigneesTasks.length;
        if (filteredAssigneesTasks.length != 0) {
          state.tasks.length = 0;
          // Add filtered tasks to the beginning of the array
          state.tasks.push(...filteredAssigneesTasks);
          // Add remaining tasks after filtered tasks
          state.tasks.push(...remainingAssigneesTasks);
          state.error = "";
        } else {
          state.error = `Unable to filter Assignee: No Assignees found for your search "${action.payload?.assignees}"`;
          alert(
            `Unable to filter Assignee: No Assignees found for your search "${action.payload?.assignees}"`
          );
        }
      } catch (error) {
        alert(error.message);
      }
    },
    filterDates: (state, action) => {
      try {
        const filteredTasks = state.tasks.filter((task) => {
          const taskDate = new Date(task.date);
          return (
            taskDate >= action.payload.startDate &&
            taskDate <= action.payload.endDate
          );
        });

        const remainingTasks = state.tasks.filter(
          (task) => !filteredTasks.includes(task)
        );
        state.noOfFilteredTasks = filteredTasks.length;
        if (filteredTasks.length != 0) {
          state.tasks.length = 0;
          state.tasks.push(...filteredTasks, ...remainingTasks);
          state.error = "";
        } else {
          state.error = `Unable to filter Dates: No task found for selected dates "${
            action.payload.startDate + "  " + action.payload.endDate
          }"`;
          alert(
            `Unable to filter Dates: No task found for selected dates "${
              action.payload.startDate + "  " + action.payload.endDate
            }"`
          );
        }
      } catch (error) {
        alert(error.message);
      }
    },
  },
});

export const selectTask = (state) => state.tasks.tasks;
export const selectError = (state) => state.tasks.error;
export const selectNoOfFilteredTasks = (state) => state.tasks.noOfFilteredTasks;

export const {
  addTask,
  updateTask,
  deleteTask,
  filterPriorityTasks,
  filterAssigneesTasks,
  sortTasks,
  filterDates,
} = tasksSlice.actions;
export default tasksSlice.reducer;

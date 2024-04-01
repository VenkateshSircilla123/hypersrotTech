import { configureStore } from "@reduxjs/toolkit";
import tasks, { tasksSlice } from "../features/task/tasks";

export const store = configureStore({
  reducer: {
    tasks: tasks,
  },
});

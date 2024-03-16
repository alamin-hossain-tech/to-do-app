import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/to-do/todo.slice";

const store = configureStore({
  reducer: {
    toDos: todoReducer,
  },
});

export default store;

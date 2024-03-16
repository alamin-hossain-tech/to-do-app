import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const initialState = {
  toDos: [],
  inProgress: [],
  completed: [],
};

const todoSlice = createSlice({
  name: "to-dos",
  initialState,
  reducers: {
    mutateTask: (state, action) => {
      const { path, value } = action.payload;
      return produce(state, (draftState) => {
        draftState[path] = value;
      });
    },
    addTask: (state, action) => {
      const { path, value } = action.payload;
      return produce(state, (draftState) => {
        const newItem = { id: Date.now(), ...value };
        draftState[path].push(newItem);
      });
    },
    deleteTask: (state, action) => {
      const { path, id } = action.payload;
      return produce(state, (draftState) => {
        draftState[path] = draftState[path].filter((item) => item.id !== id);
      });
    },
  },
});

export const { addTask, deleteTask, mutateTask } = todoSlice.actions;

export default todoSlice.reducer;

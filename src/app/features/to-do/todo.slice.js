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
    editTask: (state, action) => {
      const { path, id, value } = action.payload;
      return produce(state, (draftState) => {
        const index = draftState[path].findIndex((item) => item.id === id);
        if (index !== -1) {
          draftState[path][index] = {
            ...draftState[path][index],
            ...value,
          };
        }
      });
    },
  },
});

export const { addTask, deleteTask, mutateTask, editTask } = todoSlice.actions;

export default todoSlice.reducer;

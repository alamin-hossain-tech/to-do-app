import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDos: [],
  inProgress: [],
  completed: [],
};

const todoSlice = createSlice({
  name: "to-dos",
  initialState,
  reducers: {},
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;

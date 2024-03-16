import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/to-do/todo.slice";

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todoState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save state to localStorage after every state change
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todoState", serializedState);
  } catch {
    return undefined;
  }
};

const preloadedState = loadState();

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  saveState(store.getState());
  return result;
};

const store = configureStore({
  reducer: {
    toDos: todoReducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./toolkit";

const store = configureStore({
  reducer: {
    notes: todoReducer,
  },
});

export default store;
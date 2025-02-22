import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import apiReducer from "./apiSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    api: apiReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";
import customerReducer from "./customerSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
  },
});

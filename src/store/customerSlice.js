import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customer: [],
  customerDetails: [],
  loading: true,
  error: null,
};

const customerSlice = createSlice({
  name: "customer",

  initialState,

  reducers: {
    setCustomer: (state, action) => {
      state.customer = action.payload;
    },
    setCustomerDetails: (state, action) => {
      state.customerDetails = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearCustomer: (state) => {
      state.customer = [];
      state.loading = true;
      state.customerDetails = [];
      state.error = null;
    },
  },
});

export const { setCustomer, setCustomerDetails, setLoading, setError, clearCustomer } = customerSlice.actions;

export default customerSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const userLogSLice = createSlice({
  name: "userLog",
  initialState: {
    inputPhoneNumber: null,
    inputPLN: null,
    selectedProduct: null,
    orderID: null,
    selectedVoucher: null,
    orderIDPayment:null
  },
  reducers: {
    saveInputPhoneNumber: (state, action) => {
      state.inputPhoneNumber = action.payload;
    },
    saveInputPLN: (state, action) => {
      state.inputPLN = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setOrderID: (state, action) => {
      state.orderID = action.payload;
    },
    setSelectedVoucher: (state, action) => {
      state.selectedVoucher = action.payload;
    },
    setOrderIDPayment:(state, action) =>{
      state.orderIDPayment = action.payload
    },
  },
});

export const {
  saveInputPhoneNumber,
  saveInputPLN,
  setSelectedProduct,
  setOrderID,
  setSelectedVoucher,
  setOrderIDPayment
} = userLogSLice.actions;
export default userLogSLice.reducer;

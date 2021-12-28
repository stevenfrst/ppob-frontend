import { createSlice } from "@reduxjs/toolkit";


const registerSlice = createSlice({
  name: "register",
  initialState: {
    input: {
      username: "",
      email: "",
      password: "",
      phone_number: "",
    },
    isPosting: false,
    error: false,
  },
  reducers: {
    registerStart: (state) => {
      state.isPosting = true;
    },
    registerSuccess: (state, action) => {
      state.isPosting = false;
      state.input = action.payload;
      state.error = false;
    },
    registerFailure:(state)=>{
        state.isPosting=false
        state.error = true
    }
  },
});

export const {registerStart, registerSuccess, registerFailure} = registerSlice.actions
export default registerSlice.reducer
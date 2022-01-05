import { createSlice } from "@reduxjs/toolkit";


const registerSlice = createSlice({
  name: "register",
  initialState: {
    isPosting: false,
  },
  reducers: {
    registerPost: (state, action) => {
      state.isPosting = action.payload;
    },
    
  },
});

export const {registerPost} = registerSlice.actions
export default registerSlice.reducer
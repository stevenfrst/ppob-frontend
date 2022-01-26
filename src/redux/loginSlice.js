import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    currentUser: null,
    isFetching: false,
  },
  reducers: {
    loginFetch: (state, action) => {
      state.isFetching = action.payload;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { loginFetch, loginSuccess } = loginSlice.actions;
export default loginSlice.reducer;

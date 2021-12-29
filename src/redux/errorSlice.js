import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name:'error',
    initialState:{
        loginError : false,
        loginError500 :false,
        loginError401:false
    },
    reducers:{
        loginFailure:(state)=>{
            state.loginError=true
        },
        loginFailure500:(state)=>{
            state.loginError500=true
        },
        loginFailure401:(state)=>{
            state.loginError401=true
        }
    }
})

export const {loginFailure, loginFailure500, loginFailure401} = errorSlice.actions
export default errorSlice.reducer
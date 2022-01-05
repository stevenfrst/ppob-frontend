import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name:'error',
    initialState:{
        loginError : null,
        registerError : null
        
    },
    reducers:{
        loginFailure:(state, action)=>{
            state.loginError= action.payload
        },
        registerFailure:(state, action) =>{
            state.registerError= action.payload
        }
    }
})

export const {loginFailure, registerFailure} = errorSlice.actions
export default errorSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name:'error',
    initialState:{
        loginError : null,
        registerError : null,
        getProductError:null,
        getUserError:null,
        getTransactionError:null,
        createTransactionError:null
        
    },
    reducers:{
        loginFailure:(state, action)=>{
            state.loginError= action.payload
        },
        registerFailure:(state, action) =>{
            state.registerError= action.payload
        },
        getProductFailure:(state)=>{
            state.getProductError=true
        },
        getUserFailure:(state)=>{
            state.getUserError=true
        },
        getTransactionFailure:(state)=>{
            state.getTransactionError=true
        },
        createTransactionFailure:(state)=>{
            state.createTransactionError=true
        }
        
    }
})

export const {loginFailure, registerFailure, getProductFailure, getUserFailure, getTransactionFailure, createTransactionFailure} = errorSlice.actions
export default errorSlice.reducer
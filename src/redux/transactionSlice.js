import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
    name:'transaction',
    initialState:{
        transactionResponse:null,
        responseFetch:null,
        transactionData:null,
        transactionFetch:null
    },
    reducers:{
        getTransactionData:(state, action)=>{
            state.transactionData = action.payload
        },
        getTransactionResponse:(state, action)=>{
            state.transactionResponse= action.payload
        },
        isFetchingTransaction:(state, action)=>{
            state.transactionFetch=action.payload
        },
        isFetchingResponse:(state, action)=>{
            state.transactionFetch=action.payload
        }
    }
})

export const {getTransactionData, getTransactionResponse, isFetchingTransaction, isFetchingResponse}=transactionSlice.actions
export default transactionSlice.reducer
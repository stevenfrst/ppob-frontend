import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'product',
    initialState:{
        listProduct:null,
        isFetching:false,
        
    },
    reducers:{
        getProduct:(state, action)=>{
            state.listProduct = action.payload
        },
        isFetchingProduct:(state,action)=>{
            state.isFetching=action.payload
        },
        
    }
})

export const { getProduct, isFetchingProduct } = productSlice.actions
export default productSlice.reducer
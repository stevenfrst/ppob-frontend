import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        userData:null,
        isFetching:false
    },
    reducers:{
        getUserData:(state, action)=>{
            state.userData = action.payload
        },
        isFetchingUser:(state, action)=>{
            state.isFetching=action.payload
        }
        
    }
})

export const {getUserData, isFetchingUser} = userSlice.actions
export default userSlice.reducer
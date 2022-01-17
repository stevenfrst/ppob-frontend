import {userRequest} from '../requestMethod'
import { getUserFailure } from './errorSlice'
import { getUserData, isFetchingUser } from './userSlice'

export const user = async(dispatch) =>{
    dispatch(isFetchingUser(true))
    try{
        const res = await userRequest.get(`/user`)
        dispatch(getUserData(res?.data))
        dispatch(isFetchingUser(false))
    } catch(err){
        dispatch(getUserFailure())
        dispatch(isFetchingUser(false))
    }
}
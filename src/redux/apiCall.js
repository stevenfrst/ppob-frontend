import { loginRequest, publicRequest } from "../requestMethod";
import { registerFailure, registerStart, registerSuccess } from "./registerSlice";
import { loginFailure, loginStart, loginSuccess } from "./userSlice"


export const login = async (dispatch, user, navigate) =>{
    dispatch(loginStart());
    try{
        const res = await loginRequest.post('/login', user) 
        dispatch(loginSuccess(res.data))
        navigate("/")
    } catch(err){
        dispatch(loginFailure())
        console.log("err", err)
        return err
    }
}

export const register = async (dispatch, input, navigate)=>{
    dispatch(registerStart());
    try{
        const res = await publicRequest.post('/register', input)
        dispatch(registerSuccess(res.data))
        navigate('/login')
    } catch(err){
        dispatch(registerFailure())
        return err
    }
}
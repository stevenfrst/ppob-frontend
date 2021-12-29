import { loginRequest, publicRequest } from "../requestMethod";
import { loginFailure, loginFailure401, loginFailure500 } from "./errorSlice";
import { loginFetch, loginSuccess } from "./loginSlice";
import { registerFailure, registerStart, registerSuccess } from "./registerSlice";



export const login = async (dispatch, user, navigate) =>{
    dispatch(loginFetch(true));
    try{
        const res = await loginRequest.post('/login', user) 
        dispatch(loginSuccess(res.data))
        dispatch(loginFetch(false))
        navigate("/")
    } catch(err){
        
        if(err?.response?.status===500){
            dispatch(loginFailure500())
            loginFetch(false)
        }else if(err?.response?.status===401){
            dispatch(loginFailure401())
            loginFetch(false)
        } 
        else{
            dispatch(loginFailure())
            loginFetch(false)
        }
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
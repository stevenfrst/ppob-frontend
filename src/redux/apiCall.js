import { loginRequest, publicRequest } from "../requestMethod";
import { loginFailure, registerFailure } from "./errorSlice";
import { loginFetch, loginSuccess } from "./loginSlice";
import { registerPost } from "./registerSlice";

export const login = async (dispatch, user, navigate) => {
  dispatch(loginFetch(true));
  try {
    const res = await loginRequest.post("/login", user);

    if (res.status === 204) {
      dispatch(loginFailure("204"));
      dispatch(loginFetch(false));
    } else {
      dispatch(loginSuccess(res.data));
      dispatch(loginFetch(false));
      navigate("/");
    }
  } catch (err) {
    
    if (err?.response?.status === 401) {
      dispatch(loginFailure("401"));
      loginFetch(false);
    } else if (err?.response?.status === 400) {
      dispatch(loginFailure("400"));
      loginFetch(false);
    } else {
      dispatch(loginFailure("unkown"));
      loginFetch(false);
    }
  }
};

export const register = async (dispatch, input, navigate) => {
  dispatch(registerPost(true));
  try {
    await publicRequest.post("/register", input);
    dispatch(registerPost(false));
    navigate("/login");
  } catch (err) {
    
    if (err?.response?.status === 400) {
      if(err?.response?.data?.meta?.message=== "Duplicate Entry"){
          dispatch(registerFailure("duplicate"))
      } else (
          dispatch(registerFailure("invalid email"))
      )
      dispatch(registerPost(false));
    } else {
      dispatch(registerFailure(500));
      dispatch(registerPost(false));
    }
  }
};

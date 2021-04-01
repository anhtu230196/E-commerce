import axios from "axios";
import { AUTH_FAILED, AUTH_START, AUTH_SUCCESS, LOGOUT } from "./typeActions";

const authStart = () => {
  return {
    type: AUTH_START,
  };
};

export const authSuccess = (authData) => {
  return {
    type: AUTH_SUCCESS,
    payload: authData,
  };
};

const authFailed = () => ({ type: AUTH_FAILED });

export const setCurrentUser = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAD3aeJY71AW-iwfvtK7Z4kxU1KWEc7mqg";
    if (!isSignup) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAD3aeJY71AW-iwfvtK7Z4kxU1KWEc7mqg";
    }
    axios
      .post(url, authData)
      .then((res) => {
        dispatch(authSuccess(res.data));
        localStorage.setItem("authentication", JSON.stringify(res.data));
      })
      .catch((err) => {
        alert(err.response.data.error.message);
        dispatch(authFailed());
      });
  };
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("authentication");
  dispatch({ type: LOGOUT });
};

import { API_BASE_URL } from "../../config/APIConfig";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionType";

import axios from "axios";

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const   getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user_data = await response.data;
   
    if (user_data.token) {
      localStorage.setItem("jwt", user_data.token);
    }
    dispatch(registerSuccess(user_data.token));
    // console.log("action data" + user_data);
  } catch (err) {
    dispatch(registerFailure(err.message));
  }
};
export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
  
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user_data = await response.data;
    if (user_data.token) {
      localStorage.setItem("jwt", user_data.token);
    }
    dispatch(loginSuccess(user_data.token));
    // console.log("action data" + user_data);
  } catch (err) {
    dispatch(loginFailure(err.message));
  }
};
export const getUser = (jwt) => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    const user_data = await response.data;
 
    dispatch(getUserSuccess(user_data));

    // console.log("action data" + user_data);
  } catch (err) {
    dispatch(getUserFailure(err.message));
  }
};
export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem("jwt");
  dispatch({ type: LOGOUT, payload: null });
};

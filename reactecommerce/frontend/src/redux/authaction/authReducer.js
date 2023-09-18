import {
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOAD_PROFILE,
    LOG_OUT,
  } from "../actionType";
  
  const intial = {
    accessToken:  localStorage.getItem("access-token")
      ?  localStorage.getItem("access-token")
      : null,
    user:  localStorage.getItem("user-profile")
      ? JSON.parse( localStorage.getItem("user-profile"))
      : null,
    loading: false,
  };
   
  
  export const authreducer = (prevState = { ...intial }, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case LOGIN_SUCCESS:
        return {
          ...prevState,
          accessToken: payload,
          loading: false,
        };
      case LOGIN_REQUEST:
        return {
          ...prevState,
          loading: true,
        };
      case LOGIN_FAIL:
        return {
          ...prevState,
          loading: false,
          error: payload,
          accessToken: null,
        };
      case LOAD_PROFILE:
        return {
          ...prevState,
          user: payload,
        };
      case LOG_OUT:
        return {
          ...prevState,
          accessToken: null,
          user: null,
        };
      default:
        return prevState;
    }
  };
  
import React, { useReducer } from "react";
import axios from 'axios';
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from "../types";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";

const AuthState = (props) => {
  const initialState = {
      user : null,
      token: localStorage.getItem('token'),
      isAuthenticated :null,
      loading:true,
      error: null,

  };


//   Load a user;
const loadUser = async () =>{

  if(localStorage.token){
    setAuthToken(localStorage.token);
  }

  try {
    const res =  await axios.get('/api/auth');

    dispatch({type:USER_LOADED , payload: res.data});
  } catch (err) {
    dispatch({type:AUTH_ERROR});
  }
}

// Register a user

  const register = async (formData)=> {
    const config = {
      headers : {
        'Content-Type' : 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/users' , formData ,config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })

      loadUser();
      
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      })
      
    }
  }

//  login user 

const login = async (formData) =>{
  const config = {
    headers : {
      'Content-Type' : 'application/json'
    }
  }

  try {
    const res = await axios.post('/api/auth' , formData ,config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })

    loadUser();
    
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg
    })
    
  }
}

  

// Logout

  const logout = () =>{
    dispatch({type:LOGOUT});
  }

// Clear Errors

  const clearError = () => dispatch({type :CLEAR_ERRORS});

  const [state, dispatch] = useReducer(authReducer, initialState);




  return (
      <AuthContext.Provider value = {{
        token: state.token,
        isAuthenticated : state.isAuthenticated,
        loading: state.loading,
        error:  state.error,
        user: state.user,
        register,
        clearError,
        loadUser,
        login,
        logout
      }}>
          {props.children}
      </AuthContext.Provider>
  )
};



export default AuthState;  

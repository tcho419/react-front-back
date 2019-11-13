import React, { createContext, useReducer } from 'react';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

export const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthState = ({ children }) => {
  // set up initial state
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  // set up the useReducer hook
  const [state, dispatch] = useReducer(authReducer, initialState);

  // set up the provider functions

  // Load User

  // Register User

  // Login User

  // Logout

  // Clear Errors

  return (
    <Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error
      }}>
      {children}
    </Provider>
  );
};

export default AuthState;

import React, { createContext, useReducer } from 'react';
import uuid from 'uuid';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

export const AlertContext = createContext();
const { Provider } = AlertContext;

const AlertState = ({ children }) => {
  // set up initial state and reducer
  const initialState = [];
  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuid.v4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <Provider
      value={{
        alerts: state,
        setAlert
      }}>
      {children}
    </Provider>
  );
};

export default AlertState;

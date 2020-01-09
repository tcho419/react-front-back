import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_LOADING,
  LOGS_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT
} from './types';
import axios from 'axios';

// export const getLogs = () => {
//   return async dispatch => {
//     setLoading();
//     const response = await axios.get('/logs');
//     dispatch({
//       type: GET_LOGS,
//       payload: response.data
//     });
//   };
// };

// Get logs from server
export const getLogs = () => async dispatch => {
  setLoading();
  await axios
    .get('/logs')
    .then(response => {
      dispatch({
        type: GET_LOGS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.data
      });
    });
};

// Add new log
export const addLog = log => async dispatch => {
  setLoading();
  await axios
    .post('/logs', log)
    .then(response => {
      dispatch({
        type: ADD_LOG,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.data
      });
    });
};

// Delete a log from server
export const deleteLog = id => async dispatch => {
  setLoading();
  await axios
    .delete(`/logs/${id}`)
    .then(response => {
      dispatch({
        type: DELETE_LOG,
        payload: id
      });
    })
    .catch(error => {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.data
      });
    });
};

// Update log on server
export const updateLog = log => async dispatch => {
  // try to fix this using axios
  try {
    setLoading();
    const response = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    dispatch({
      type: UPDATE_LOG,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

// Set current log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

// Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

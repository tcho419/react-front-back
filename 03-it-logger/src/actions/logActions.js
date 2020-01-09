import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from './types';
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

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

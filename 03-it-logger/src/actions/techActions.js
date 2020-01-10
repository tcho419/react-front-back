import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from './types';
import axios from 'axios';

// Get techs from server
export const getTechs = () => async dispatch => {
  setLoading();
  await axios
    .get('/techs')
    .then(response => {
      dispatch({
        type: GET_TECHS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: TECHS_ERROR,
        payload: error.response.statusText
      });
    });
};

// Add technician to server
export const addTech = tech => async dispatch => {
  setLoading();
  await axios
    .post('/techs', tech)
    .then(response => {
      dispatch({
        type: ADD_TECH,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: TECHS_ERROR,
        payload: error.response.statusText
      });
    });
};

// Delete technician from server
export const deleteTech = id => async dispatch => {
  setLoading();
  await axios
    .delete(`/techs/${id}`)
    .then(response => {
      dispatch({
        type: DELETE_TECH,
        payload: id
      });
    })
    .catch(error => {
      dispatch({
        type: TECHS_ERROR,
        payload: error.response.statusText
      });
    });
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

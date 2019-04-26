import {
    GET_BREADS_REQUEST,
    GET_BREADS_SUCCESS,
    GET_BREADS_FAIL,
    SET_BREADS
  } from '../constants/page'
  
  function setBreads(data) {
    const breads = data;
  
    return {
      type: SET_BREADS,
      payload: breads
    }
  }

  export function getBreads() {
    return dispatch => {
      dispatch({
        type: GET_BREADS_REQUEST
      });
      //TODO: add ENV for URL
      return fetch(`http://localhost:5000/api/breads`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
  
          throw new Error(`${response.status}: ${response.statusText}`);
        })
        .then(data => {
          dispatch({
            type: GET_BREADS_SUCCESS
          })
          dispatch(setBreads(data))
        })
        .catch(error => {
          dispatch({
            type: GET_BREADS_FAIL,
            payload: error.message
          })
        })
    }
  }
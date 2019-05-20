import {
    GET_STEP_REQUEST,
    GET_STEP_SUCCESS,
    GET_STEP_FAIL,
    SET_STEP
  } from '../constants/step'
  
  function setStep(data) {
    const step = data;
  
    return {
      type: SET_STEP,
      payload: step
    }
  }

  export function getStepByRecipeIdAndNumber(recipeId, stepNumber) {
    return dispatch => {
      dispatch({
        type: GET_STEP_REQUEST
      });
      //TODO: add ENV for URL
      return fetch(`http://localhost:5000/api/steps/` + recipeId + '/' + stepNumber)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
  
          throw new Error(`${response.status}: ${response.statusText}`);
        })
        .then(data => {
          dispatch({
            type: GET_STEP_SUCCESS
          })
          dispatch(setStep(data))
        })
        .catch(error => {
          dispatch({
            type: GET_STEP_FAIL,
            payload: error.message
          })
        })
    }
  }
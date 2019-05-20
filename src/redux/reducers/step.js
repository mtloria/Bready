import {
    GET_STEP_REQUEST,
    GET_STEP_SUCCESS,
    GET_STEP_FAIL,
    SET_STEP
  } from '../constants/step'
  
  const initialState = {
    isFetched: false,
    error: null,
    step: []
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_STEP_REQUEST:
        return {
          ...state,
          isFetched: true
        }
  
      case GET_STEP_SUCCESS:
        return {
          ...state,
          isFetched: false
        }
  
      case GET_STEP_FAIL:
        return {
          ...state,
          isFetched: false,
          error: action.payload
        }

      case SET_STEP:
        return {
            ...state,
            step: action.payload
        }
  
      default:
        return state
    }
  }
import {
    GET_BREADS_REQUEST,
    GET_BREADS_SUCCESS,
    GET_BREADS_FAIL,
    SET_BREADS
  } from '../constants/page'
  
  const initialState = {
    isFetched: false,
    error: null,
    breads: []
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_BREADS_REQUEST:
        return {
          ...state,
          isFetched: true
        }
  
      case GET_BREADS_SUCCESS:
        return {
          ...state,
          isFetched: false
        }
  
      case GET_BREADS_FAIL:
        return {
          ...state,
          isFetched: false,
          error: action.payload
        }

      case SET_BREADS:
        return {
            ...state,
            breads: action.payload
        }
  
      default:
        return state
    }
  }
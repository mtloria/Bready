import {
    GET_RECIPES_REQUEST,
    GET_RECIPES_SUCCESS,
    GET_RECIPES_FAIL,
    SET_RECIPES
  } from '../constants/bake'
  
  const initialState = {
    isFetched: false,
    error: null,
    recipe: []
  }
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_RECIPES_REQUEST:
        return {
          ...state,
          isFetched: true
        }
  
      case GET_RECIPES_SUCCESS:
        return {
          ...state,
          isFetched: false
        }
  
      case GET_RECIPES_FAIL:
        return {
          ...state,
          isFetched: false,
          error: action.payload
        }

      case SET_RECIPES:
        return {
            ...state,
            recipe: action.payload
        }
  
      default:
        return state
    }
  }
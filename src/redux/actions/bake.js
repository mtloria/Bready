import {
    GET_RECIPES_REQUEST,
    GET_RECIPES_SUCCESS,
    GET_RECIPES_FAIL,
    SET_RECIPES
  } from '../constants/bake'
  
  function setRecipes(data) {
    const recipe = data;
  
    return {
      type: SET_RECIPES,
      payload: recipe
    }
  }

  export function getRecipeByBreadId(breadId) {
    return dispatch => {
      dispatch({
        type: GET_RECIPES_REQUEST
      });
      //TODO: add ENV for URL
      return fetch(`http://localhost:5000/api/recipes/` + breadId)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
  
          throw new Error(`${response.status}: ${response.statusText}`);
        })
        .then(data => {
          dispatch({
            type: GET_RECIPES_SUCCESS
          })
          dispatch(setRecipes(data))
        })
        .catch(error => {
          dispatch({
            type: GET_RECIPES_FAIL,
            payload: error.message
          })
        })
    }
  }
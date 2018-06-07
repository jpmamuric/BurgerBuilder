import * as types from './types';
import axios from 'axios';

export const addIngredients = ingredientName => dispatch => {
  dispatch({ type: types.ADD_INGREDIENT, ingredientName });
}

export const removeIngredients = ingredientName => dispatch => {
  dispatch({ type: types.REMOVE_INGREDIENT, ingredientName });
}

export const initIngredients = () => async dispatch => {
  try {
    const res  = await axios.get('https://burger-builder-84fb5.firebaseio.com/ingredients.json')
    dispatch({ type: types.INIT_INGREDIENTS, payload: res.data });
  }

  catch(err){
    dispatch({ type: types.LOADING_INGREDIENTS_ERROR, payload: true })
  }
}

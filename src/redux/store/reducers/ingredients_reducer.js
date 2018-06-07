import * as types from '../actions/types';

import { updateObject } from '../utils/utility';

const initialState = {
  list: null,
  totalPrice: 0,
  error: false
};

const INGREDIENT_PRICES = {
  b_tomato: 0.2,
  a_lettuce: 0,
  c_cheese: 0.5,
  d_meat: 1
}

const addIngredient = (state, action) => {
  const updatedIngredient = { [action.ingredientName]: state.list[action.ingredientName] + 1 }
  const updatedIngredients = updateObject(state.list, updatedIngredient)
  const updatedState = {
    list: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
  }
  return updateObject (state, updatedState)
}

export default (state = initialState, action) => {
  switch (action.type) {
    //update state Method One
    case types.ADD_INGREDIENT: return addIngredient( state, action);

    //update state Method Two
    case types.REMOVE_INGREDIENT:
      return {
        ...state,
        list: {
          ...state.list,
          [action.ingredientName]: state.list[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      }

    case types.INIT_INGREDIENTS:
      const { a_lettuce, b_tomato, c_cheese, d_meat } = action.payload
      return {
        ...state,
        list: {
          b_tomato,
          a_lettuce,
          c_cheese,
          d_meat
        },
        totalPrice: 0,
        error: false
      };

    case types.HANDLE_ORDER_SUBMIT:
      return {
        ...state,
        totalPrice: 0
      }

    case types.LOADING_INGREDIENTS_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
}

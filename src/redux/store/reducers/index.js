import { combineReducers } from 'redux';

import ingredients from './ingredients_reducer';
import orders      from './orders_reducer'

const rootReducer = combineReducers({
  ingredients,
  orders
});

export default rootReducer;

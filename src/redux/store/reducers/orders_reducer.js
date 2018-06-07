import * as types from '../actions/types';

const initialState = {
  list: [],
  loading: false,
  purchased: false,
  error: false
};

export default (state = initialState, action ) => {
  switch (action.type) {
    case types.HANDLE_ORDER_INIT:
      return {
        ...state,
        purchased: false
      }

    case types.HANDLE_ORDER_PURCHASE_START:
      return {
        ...state,
        loading: true
      };

    case types.HANDLE_ORDER_SUBMIT:
      return {

      };

    case types.HANDLE_ORDER_PURCHASE_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId
      };

      return {
        ...state,
        loading: false,
        list: state.list.concat(newOrder),
        purchased: true
      };

    case types.HANDLE_ORDER_PURCHASE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case types.FETCH_ORDERS_START:
      return {
        ...state,
        loading: true
      };

    case types.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        list: action.orders,
        loading: false
      };

    case types.FETCH_ORDERS_FAIL:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}

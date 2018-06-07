import * as types from './types';
import axios from '../../../axios-orders';

// HANDLE PURCHASING
export const handleOrderPurchaseSuccess = (id, orderData) => {
  return {
    type: types.HANDLE_ORDER_PURCHASE_SUCCESS,
    orderId: id,
    orderData
  }
}

export const handleOrderPurchaseFail = error => {
  return {
    type: types.HANDLE_ORDER_PURCHASE_FAIL,
    error
  }
}

export const handleOrderPurchaseStart = () => ({ type: types.HANDLE_ORDER_PURCHASE_START })

export const handleOrderPurchase = orderData => async dispatch => {
  dispatch(handleOrderPurchaseStart());
  try {
    const res = await axios.post('/orders.json', orderData);
      dispatch(handleOrderPurchaseSuccess(res.data.name, orderData));
  }
  catch(err){
     dispatch(handleOrderPurchaseFail(err))
  }
}

export const handleOrderInit = () => ({ type: types.HANDLE_ORDER_INIT })

// FETCH ORDERS
export const fetchOrdersSuccess = orders => ({
  type: types.FETCH_ORDERS_SUCCESS,
  orders
});

export const fetchOrdersFail = error => ({
  type: types.FETCH_ORDERS_FAIL,
  error
});

export const fetchOrdersStart = () => ({ type: types.FETCH_ORDERS_START })

export const fetchOrders = () => async dispatch => {
  dispatch(fetchOrdersStart())
  try {
    const res = await axios.get('/orders.json');
    const fetchedOrders = [];
    for (let key in res.data ) {
      fetchedOrders.push({
        // to prevent mutation
        ...res.data[key],
        id: key
      });
    }
    dispatch(fetchOrdersSuccess(fetchedOrders))
  } catch(err) {
    dispatch(fetchOrdersFail(err))
  }
}

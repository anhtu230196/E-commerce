import {
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_START,
  PURCHASE_FAIL,
  PURCHASE_START,
  PURCHASE_SUCCESS,
} from "../actions/typeActions";

const initialState = {
  orders: [],
  loading: false,
  orderLoading: false,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PURCHASE_START:
      return { ...state, loading: true };
    case PURCHASE_SUCCESS:
      return { ...state, loading: false };
    case PURCHASE_FAIL:
      return { ...state, loading: false };
    case FETCH_ORDERS_START:
      return { ...state, orderLoading: true };
    case FETCH_ORDERS_SUCCESS:
      return { ...state, orderLoading: false, orders: action.payload };
    default:
      return state;
  }
};
export default orderReducer;

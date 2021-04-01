import axios from "axios";
import { clearCart } from "./cartAction";
import {
  FETCH_ORDERS_FAIL,
  FETCH_ORDERS_START,
  FETCH_ORDERS_SUCCESS,
  PURCHASE_FAIL,
  PURCHASE_START,
  PURCHASE_SUCCESS,
} from "./typeActions";

const purchaseStart = () => {
  return {
    type: PURCHASE_START,
  };
};

const purchaseSuccess = () => {
  return {
    type: PURCHASE_SUCCESS,
  };
};

const purchaseFailed = () => {
  return {
    type: PURCHASE_FAIL,
  };
};

export const purchase = (order, history) => {
  return (dispatch) => {
    dispatch(purchaseStart());
    axios
      .post(
        "https://react-my-burger-4a0ef-default-rtdb.firebaseio.com/orders.json",
        order
      )
      .then((res) => {
        history.replace("/order");
        dispatch(purchaseSuccess());
        dispatch(clearCart());
      })
      .catch((err) => {
        dispatch(purchaseFailed());
        alert("Does something wrong!!!");
      });
  };
};

export const fetchOrder = () => (dispatch) => {
  dispatch({ type: FETCH_ORDERS_START });
  axios
    .get(
      "https://react-my-burger-4a0ef-default-rtdb.firebaseio.com/orders.json"
    )
    .then((res) => {
      const fetchedOrders = [];
      for (let key in res.data) {
        fetchedOrders.push({ ...res.data[key], id: key });
      }
      dispatch({ type: FETCH_ORDERS_SUCCESS, payload: fetchedOrders });
    })
    .catch((err) => {
      dispatch({ type: FETCH_ORDERS_FAIL, payload: err });
    });
};

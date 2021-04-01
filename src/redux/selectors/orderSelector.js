import { createSelector } from "reselect";
import { selectCurrentUser } from "./userSelector";

const selectOrder = (state) => state.order;

export const purchaseLoading = createSelector(
  selectOrder,
  (order) => order.loading
);

export const orderLoading = createSelector(
  selectOrder,
  (order) => order.orderLoading
);

export const totalOrders = createSelector(selectOrder, (order) => order.orders);

export const fetchOrdersByUserId = createSelector(
  totalOrders,
  selectCurrentUser,
  (orders, userId) => orders.filter((order) => order.userId === userId)
);

export const fetchOrdersNonUserId = createSelector(totalOrders, (orders) =>
  orders.filter((order) => !order.userId)
);

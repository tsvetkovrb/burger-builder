import {
  PURCHASE_BURGER_FAILURE,
  PURCHASE_BURGER_SUCCESS,
  PURCHASE_BURGER_START
} from "../actionTypes";
import axios from "../../axios-orders";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: PURCHASE_BURGER_SUCCESS,
    id,
    orderData
  };
};

export const purchaseBurgerFailure = error => {
  return {
    type: PURCHASE_BURGER_FAILURE,
    error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: PURCHASE_BURGER_START
  };
};

export const purchaseBurger = orderData => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post("/orders.json", orderData)
      .then(response => {
        console.log(response.data);
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch(error => {
        dispatch(purchaseBurgerFailure(error));
      });
  };
};

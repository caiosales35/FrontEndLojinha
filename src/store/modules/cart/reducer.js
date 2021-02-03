import { createReducer } from "@reduxjs/toolkit";
import { addToCart, removeFromCart, updateAmount } from "./actions";

const cart = createReducer([], {
  [addToCart]: (state, action) => {
    const { payload } = action;
    const { id } = payload;
    const productExists = state.find((product) => product.id === id);
    if (productExists) {
      productExists.amount = productExists.amount + 1;
    } else {
      payload.amount = 1;
      state.push(payload);
    }
  },
  [removeFromCart]: (state, action) => {
    const productIndex = state.findIndex(
      (product) => product.id === action.payload
    );
    if (productIndex >= 0) {
      state.splice(productIndex, 1);
    }
  },
  [updateAmount]: (state, action) => {
    const { id, amount } = action.payload;
    const productExists = state.find((product) => product.id === id);
    if (productExists) {
      const productIndex = state.findIndex(
        (product) => product.id === productExists.id
      );
      if (productIndex >= 0 && amount >= 0) {
        state[productIndex].amount = Number(amount);
      }
    }
    return state;
  },
});

export default cart;

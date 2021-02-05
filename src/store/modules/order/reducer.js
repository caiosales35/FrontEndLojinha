import { createReducer } from "@reduxjs/toolkit";
import { addOrder } from "./actions";

const order = createReducer([], {
  [addOrder]: (state, action) => {
    const { payload } = action;
    state = payload;
    return state;
  },
});

export default order;

import { createReducer } from "@reduxjs/toolkit";
import { addOrder } from "./actions";

const order = createReducer([], {
  [addOrder]: (state, action) => {
    const { payload } = action;
    state.push(payload);
  },
});

export default order;

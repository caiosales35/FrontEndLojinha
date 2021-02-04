import { createReducer } from "@reduxjs/toolkit";
import { login, logout } from "./actions";

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {},
};

const auth = createReducer(INITIAL_STATE, {
  [login]: (state, action) => {
    const { payload } = action;
    state.isAuthenticated = true;
    state.user = payload;
  },
  [logout]: (state, action) => {
    state.isAuthenticated = false;
    state.user = {};
  },
});

export default auth;

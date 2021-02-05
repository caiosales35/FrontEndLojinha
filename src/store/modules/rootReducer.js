import { combineReducers } from "redux";

import cart from "./cart/reducer";
import auth from "./auth/reducer";
import order from "./order/reducer";

export default combineReducers({
  cart,
  auth,
  order,
});

import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("cart/add_product");
export const removeFromCart = createAction("cart/remove_product");
export const updateAmount = createAction("cart/update_amount");

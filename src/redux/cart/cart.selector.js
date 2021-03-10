import { createSelector } from "reselect";

const selectCart = (state) => {
  return state.cart;
};

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    )
);

export const selectCartProperty = createSelector(
  [selectCart],
  (cartItems) => cartItems.hidden
);

export const selectTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price,
    0
  )
);

import { createSelector } from "reselect";

const selectShop = (state) => {
  return state.shop;
}

export const selectCollection = createSelector(
  [selectShop],
  shop => shop.collections,
);

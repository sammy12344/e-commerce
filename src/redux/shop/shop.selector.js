import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => {
  return state.shop;
};

export const selectCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCategory = memoize((collectionId) =>
  createSelector([selectCollection], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionId]
    )
  )
);

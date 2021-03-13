import { BASKET_ADD, BASKET_REDUCE } from "./types";

export const addBasket = (requestedItem) => ({
  type: BASKET_ADD,
  payload: requestedItem,
});

export const reduceBasket = (requestedItem) => ({
  type: BASKET_REDUCE,
  payload: requestedItem,
});

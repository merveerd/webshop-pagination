import {
  COMPANIES_START,
  PAGE_CHANGE,
  ITEMS_START,
  SELECTED_ITEMS_START,
  BASKET_ADD,
} from "./types";

export const getCompanies = () => ({
  type: COMPANIES_START,
});

export const getPageItems = (currentPage) => {
  return {
    type: ITEMS_START,
    payload: currentPage,
  };
};

export const getSelectedItems = (data) => {
  return {
    type: SELECTED_ITEMS_START,
    payload: data,
  };
};

export const setPage = (currentPage) => ({
  type: PAGE_CHANGE,
  payload: currentPage,
});

export const setBasket = (addedItem) => ({
  type: BASKET_ADD,
  payload: addedItem,
});

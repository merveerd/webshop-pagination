import {
  COMPANIES_START,
  PAGE_CHANGE,
  ITEMS_START,
  SELECTED_ITEMS_START,
  SELECTED_TYPE_CHANGE,
  BASKET_ADD,
  BASKET_REDUCE,
} from "./types";

export const getCompanies = () => ({
  type: COMPANIES_START,
});

export const getPageDefaultItems = (currentPage) => {
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

export const setPage = (pageSelectionEvent) => {
  return {
    type: PAGE_CHANGE,
    payload: pageSelectionEvent.selected + 1, //selected returns index
  };
};

export const setItemType = (selectedType) => {
  return {
    type: SELECTED_TYPE_CHANGE,
    payload: selectedType,
  };
};

export const addBasket = (requestedItem) => ({
  type: BASKET_ADD,
  payload: requestedItem,
});

export const reduceBasket = (requestedItem) => ({
  type: BASKET_REDUCE,
  payload: requestedItem,
});

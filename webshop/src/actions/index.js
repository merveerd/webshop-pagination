import {
  PAGE_CHANGE,
  SELECTED_TYPE_CHANGE,
  SORT_RULE_CHANGE,
  BRAND_CHANGE,
  TAG_CHANGE,
  SEARCH_PARAMETERS_START,
  ITEMS_START,
  SELECTED_ITEMS_START,
  BASKET_ADD,
  BASKET_REDUCE,
} from "./types";

export const getCompaniesandTags = () => ({
  type: SEARCH_PARAMETERS_START,
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

export const setItemType = (itemType) => {
  return {
    type: SELECTED_TYPE_CHANGE,
    payload: itemType,
  };
};

export const setSortRule = (sortRule) => {
  return {
    type: SORT_RULE_CHANGE,
    payload: sortRule,
  };
};

export const setBrand = (brand) => {
  return {
    type: BRAND_CHANGE,
    payload: brand,
  };
};
export const setTag = (tag) => {
  return {
    type: TAG_CHANGE,
    payload: tag,
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

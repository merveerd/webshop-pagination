import {
  PAGE_CHANGE,
  SELECTED_TYPE_CHANGE,
  SORT_RULE_CHANGE,
  BRAND_CHANGE,
  TAG_CHANGE,
  DEFAULT_ITEMS_START,
  SELECTED_ITEMS_START,
} from "./types";

export const getPageDefaultItems = (currentPage) => ({
  type: DEFAULT_ITEMS_START,
  payload: currentPage,
});

export const getSelectedItems = (data) => ({
  type: SELECTED_ITEMS_START,
  payload: data,
});

export const setPage = (pageSelectionEvent) => ({
  type: PAGE_CHANGE,
  payload: pageSelectionEvent.selected + 1, //selected returns index
});
export const setItemType = (itemType) => ({
  type: SELECTED_TYPE_CHANGE,
  payload: itemType,
});
export const setSortRule = (sortRule) => ({
  type: SORT_RULE_CHANGE,
  payload: sortRule,
});
export const setBrand = (brand) => ({
  type: BRAND_CHANGE,
  payload: brand,
});

export const setTag = (tag) => ({
  type: TAG_CHANGE,
  payload: tag,
});

import { createSelector } from "reselect";

import {
  ITEMS_START,
  ITEMS_RECEIVED,
  ITEMS_FAILED,
  SELECTED_ITEMS_START,
  SELECTED_ITEMS_RECEIVED,
  SELECTED_ITEMS_FAILED,
  SELECTED_TYPE_CHANGE,
  SORT_RULE_CHANGE,
  PAGE_CHANGE,
  PAGE_CHANGE_FAILED,
} from "../actions/types";

const INITIAL_STATE = {
  loading: true,
  selectedType: "",
  sortType: "",
  sortOrder: "",
  selectedItems: [],
  pageItems: [],
  page: 1,
  pageCount: 1,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITEMS_START:
      return { ...state, loading: true };
    case ITEMS_RECEIVED:
      return {
        ...state,
        pageItems: action.payload.data,
        pageCount: Math.ceil(Number(action.payload.dataCount) / 16),
        selectedType: "",
        loading: false,
      };
    case ITEMS_FAILED:
      return { ...state, loading: false };
    case SELECTED_ITEMS_START:
      return { ...state, loading: true };
    case SELECTED_ITEMS_RECEIVED:
      return {
        ...state,
        pageItems: action.payload.data,
        pageCount: Math.ceil(Number(action.payload.dataCount) / 16),
        loading: false,
      };

    case SELECTED_ITEMS_FAILED:
      return { ...state, loading: false };

    case SELECTED_TYPE_CHANGE:
      return { ...state, selectedType: action.payload };

    case SORT_RULE_CHANGE:
      return {
        ...state,
        sortType: action.payload.sortType,
        sortOrder: action.payload.sortOrder,
      };

    case PAGE_CHANGE:
      return { ...state, page: action.payload };

    case PAGE_CHANGE_FAILED:
      return { ...state };

    default:
      return state;
  }
};
export const currentPage = (state) => {
  return state.page;
};

export const currentPageItems = (state) => {
  return state.pageItems;
};

export const selectedType = (state) => state.selectedType;

export default reducer;

import { createSelector } from "reselect";

import {
  ITEMS_START,
  ITEMS_RECEIVED,
  ITEMS_FAILED,
  SELECTED_ITEMS_START,
  SELECTED_ITEMS_RECEIVED,
  SELECTED_ITEMS_FAILED,
  PAGE_CHANGE,
  PAGE_CHANGE_FAILED,
} from "../actions/types";

const INITIAL_STATE = {
  loading: true,
  defaultItems: [], //only the current page items
  selectedType: "",
  selectedItems: [], //mugs or shirts. whole bunch of data since I wasn't able to paginate at the same time on JSON Server
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
        defaultItems: action.payload.data,
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
        selectedItems: action.payload.data,
        pageCount: Math.ceil(Number(action.payload.dataCount) / 16),
        selectedType: action.payload.data[0].itemType,
        loading: false,
      };

    case SELECTED_ITEMS_FAILED:
      return { ...state, loading: false };
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

export const selectedType = (state) => state.selectedType;

export const selectedItems = (state) => state.selectedItems;

export const defaultItems = (state) => state.defaultItems;

export const currentPageItems = createSelector(
  [selectedType, selectedItems, defaultItems, currentPage],
  (selectedType, selectedItems, defaultItems, page) => {
    if (!selectedType) {
      return defaultItems;
    } else if (selectedItems) {
      return selectedItems.slice((page - 1) * 16, page * 16);
    }
  }
);
export default reducer;

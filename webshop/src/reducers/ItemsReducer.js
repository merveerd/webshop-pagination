import { createSelector } from "reselect";
import { pageItemCount } from "../constants";
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
  TAG_CHANGE,
  BRAND_CHANGE,
} from "../actions/types";

const INITIAL_STATE = {
  loading: true,
  itemType: "",
  sortType: "",
  sortOrder: "",
  brand: "",
  tag: "",
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
        pageCount: Math.ceil(Number(action.payload.dataCount) / pageItemCount),
        itemType: "",
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
        pageCount: Math.ceil(Number(action.payload.dataCount) / pageItemCount),
        loading: false,
      };

    case SELECTED_ITEMS_FAILED:
      return { ...state, loading: false };

    case SELECTED_TYPE_CHANGE:
      return { ...state, itemType: action.payload };

    case SORT_RULE_CHANGE:
      return {
        ...state,
        sortType: action.payload.sortType,
        sortOrder: action.payload.sortOrder,
      };

    case BRAND_CHANGE:
      return { ...state, brand: action.payload };
    case TAG_CHANGE:
      return { ...state, tag: action.payload };

    case PAGE_CHANGE:
      return { ...state, page: action.payload };

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

export const itemType = (state) => state.itemType;

export default reducer;

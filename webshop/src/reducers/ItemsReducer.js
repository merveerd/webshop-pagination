import {
  ITEMS_START,
  ITEMS_RECEIVED,
  ITEMS_FAILED,
  SELECTED_ITEMS_START,
  SELECTED_ITEMS_RECEIVED,
  SELECTED_ITEMS_FAILED,
} from "../actions/types";

const INITIAL_STATE = {
  loading: true,
  allItems: [],
  selectedItems: [], //mugs or shirts
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ITEMS_START:
      return { ...state, loading: true };
    case ITEMS_RECEIVED:
      return { ...state, allItems: action.payload, loading: false };
    case ITEMS_FAILED:
      return { ...state, loading: false };
    case SELECTED_ITEMS_START:
      return { ...state, loading: true };
    case SELECTED_ITEMS_RECEIVED:
      return { ...state, selectedItems: action.payload, loading: false };

    case SELECTED_ITEMS_FAILED:
      return { ...state, loading: false };

    default:
      return state;
  }
};
export default reducer;

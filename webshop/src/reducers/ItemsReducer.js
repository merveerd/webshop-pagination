import {
  PAGE_CHANGE_START,
  ITEMS_RECEIVED,
  ITEMS_FAILED,
} from "../actions/types";

const INITIAL_STATE = {
  loading: true,
  items: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PAGE_CHANGE_START:
      return { ...state, loading: true };
    case ITEMS_RECEIVED:
      return { ...state, items: action.payload, loading: false };
    case ITEMS_FAILED:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default reducer;

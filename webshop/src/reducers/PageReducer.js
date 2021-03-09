import { PAGE_CHANGE, PAGE_CHANGE_FAILED } from "../actions/types";

const INITIAL_STATE = {
  currentPage: 1,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PAGE_CHANGE:
      return { ...state, currentPage: action.payload };

    case PAGE_CHANGE_FAILED:
      return { ...state };
    default:
      return state;
  }
};
export default reducer;

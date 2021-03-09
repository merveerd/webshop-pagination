import {
  COMPANIES_START,
  COMPANIES_RECEIVED,
  COMPANIES_FAILED,
} from "../actions/types";

const INITIAL_STATE = {
  companies: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMPANIES_START:
      return { ...state };
    case COMPANIES_RECEIVED:
      return { ...state, companies: action.payload };
    case COMPANIES_FAILED:
      return { ...state };
    default:
      return state;
  }
};
export default reducer;

import {
  SEARCH_PARAMETERS_RECEIVED,
  SEARCH_PARAMETERS_FAILED,
} from "../actions/types";

const INITIAL_STATE = {
  companies: {},
  tags: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_PARAMETERS_RECEIVED:
      return {
        ...state,
        companies: action.payload.companies,
        tags: action.payload.tags,
      };
    case SEARCH_PARAMETERS_FAILED:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;

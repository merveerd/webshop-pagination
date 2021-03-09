import { combineReducers } from "redux";
import ItemsReducer from "./ItemsReducer";
import PageReducer from "./PageReducer";
import CompaniesReducer from "./CompaniesReducer";

export default combineReducers({
  itemsResponse: ItemsReducer,
  pageResponse: PageReducer,
  companiesResponse: CompaniesReducer,
});

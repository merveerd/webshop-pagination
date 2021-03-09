import { combineReducers } from "redux";
import ItemsReducer from "./ItemsReducer";
import PageReducer from "./PageReducer";
import BasketReducer from "./BasketReducer";
import CompaniesReducer from "./CompaniesReducer";

export default combineReducers({
  itemsResponse: ItemsReducer,
  pageResponse: PageReducer,
  basketResponse: BasketReducer,
  companiesResponse: CompaniesReducer,
});

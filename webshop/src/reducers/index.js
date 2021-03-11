import { combineReducers } from "redux";
import ItemsReducer from "./ItemsReducer";
import BasketReducer from "./BasketReducer";
import CompaniesReducer from "./CompaniesReducer";
export default combineReducers({
  itemsResponse: ItemsReducer,
  basketResponse: BasketReducer,
  companiesResponse: CompaniesReducer,
});

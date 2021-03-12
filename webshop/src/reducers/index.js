import { combineReducers } from "redux";
import ItemsReducer from "./ItemsReducer";
import BasketReducer from "./BasketReducer";
import SearchReducer from "./SearchReducer";
export default combineReducers({
  itemsResponse: ItemsReducer,
  basketResponse: BasketReducer,
  searchResponse: SearchReducer,
});

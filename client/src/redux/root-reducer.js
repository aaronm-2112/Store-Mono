import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import searchReducer from "./search/search.reducer";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  // cart: cartReducer,
  search: searchReducer,
});

export default persistReducer(persistConfig, rootReducer);

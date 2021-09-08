import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  search: searchReducer,
});

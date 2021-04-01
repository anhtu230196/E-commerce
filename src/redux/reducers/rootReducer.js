import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartReducer";
import directoryReducer from "./directoryReducer";
import orderReducer from "./orderReducer";
import shopReducer from "./shopReducer";
import userReducer from "./userReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  directory: directoryReducer,
  shop: shopReducer,
  cart: cartReducer,
  user: userReducer,
  order: orderReducer,
});

export default persistReducer(persistConfig, rootReducer);

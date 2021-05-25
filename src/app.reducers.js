import { combineReducers } from "redux";
import userReducer from "./auth/auth-reducers/auth.reducers";
import headReducer from "./header-sidebar/head-reducers/head.reducers";
import walletReducer from "./customer-managment/wallet-reducers/wallet.reducers";

export default combineReducers({
  userReducer,
  headReducer,
  walletReducer
});

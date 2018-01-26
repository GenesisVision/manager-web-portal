import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";

import alertMessagesReducer from "../shared/alert-message/reducers/index";
import authReducer from "./authReducer";
import loginReducer from "../shared/login/reducers";
import profileReducer from "./profileReducer/profileReducer";
import registerReducer from "../shared/register/reducers/index";
import traderReducer from "./traderReducer";
import tradersReducer from "./tradersReducer";
import gvtWalletReducer from "./gvtWalletReducer/gvtWalletReducer";

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  loadingBar: loadingBarReducer,
  tradersInfo: tradersReducer,
  traderData: traderReducer,
  loginData: loginReducer,
  registerData: registerReducer,
  authData: authReducer,
  profileData: profileReducer,
  gvtWalletData: gvtWalletReducer,
  alertMessages: alertMessagesReducer
});

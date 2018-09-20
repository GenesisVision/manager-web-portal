import headerReducer from "modules/header/reducer/header-reducer";
import notificationsReducer from "pages/app/components/notifications/reducers/notifications.reducers";
import { loadingBarReducer } from "react-redux-loading-bar";
import { routerReducer } from "react-router-redux";
import accountSettingsReducer from "reducers/account-settings";
import { combineReducers } from "redux";

import navigationReducer from "../modules/navigation/reducer/navigation-reducer";
import programSettingsReducer from "../modules/program-settings/reducers/program-settings-reducers";
import loginReducer from "../pages/auth/login/reducers/login.reducers";
import signUpReducer from "../pages/auth/signup/reducers/signup.reducers";
import alertMessagesReducer from "../shared/modules/alert-message/reducers/alert-message-reducers";
import authReducer from "./auth-reducer";
import platformReducer from "./platform-reducer";

export default combineReducers({
  routing: routerReducer,
  loadingBar: loadingBarReducer,
  platformData: platformReducer,
  alertMessages: alertMessagesReducer,
  loginData: loginReducer,
  signUpData: signUpReducer,
  authData: authReducer,
  profileHeader: headerReducer,
  programSettingsData: programSettingsReducer,
  navigationData: navigationReducer,
  notifications: notificationsReducer,
  accountSettings: accountSettingsReducer
});

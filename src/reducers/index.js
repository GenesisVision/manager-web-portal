import headerReducer from "modules/header/reducer/header-reducer";
import notificationSettingsReducer from "modules/notification-settings/reducers/notification-settings.reducers";
import notificationsReducer from "pages/app/components/notifications/reducers/notifications.reducers";
import programNotificationsReducer from "modules/program-notifications/reducers/program-notifications.reducers";
import fundNotificationsReducer from "modules/fund-notifications/reducers/fund-notifications.reducers";
import walletReducer from "pages/wallet/reducers/wallet.reducers.js";
import { loadingBarReducer } from "react-redux-loading-bar";
import { routerReducer } from "react-router-redux";
import accountSettingsReducer from "reducers/account-settings";
import uiReducer from "reducers/ui-reducer";
import { combineReducers } from "redux";

import dashboardReducer from "../pages/dashboard/reducers/dashboard.reducers";
import programDepositReducer from "modules/program-deposit/reducer/program-deposit.reducer";
import fundDepositReducer from "modules/fund-deposit/reducer/fund-deposit.reducer";
import managerReducer from "../pages/manager/reducers/manager.reducers";
import programsReducer from "../modules/programs-table/reducers/programs-table.reducers";
import fundsReducer from "../modules/funds-table/reducers/funds-table.reducers";
import navigationReducer from "../modules/navigation/reducer/navigation-reducer";
import programSettingsReducer from "../modules/program-settings/reducers/program-settings-reducers";
import passwordRestoreReducer from "../pages/auth/forgot-password/reducers/password-restore-reducers";
import loginReducer from "../pages/auth/login/reducers/login.reducers";
import signUpReducer from "../pages/auth/signup/reducers/signup.reducers";
import alertMessagesReducer from "../shared/modules/alert-message/reducers/alert-message-reducers";
import authReducer from "./auth-reducer";
import emailPendingReducer from "./email-pending-reducer";
import platformReducer from "./platform-reducer";

export default combineReducers({
  dashboard: dashboardReducer,
  programNotifications: programNotificationsReducer,
  fundNotifications: fundNotificationsReducer,
  programDeposit: programDepositReducer,
  fundDeposit: fundDepositReducer,
  manager: managerReducer,
  programsData: programsReducer,
  fundsData: fundsReducer,
  routing: routerReducer,
  loadingBar: loadingBarReducer,
  platformData: platformReducer,
  alertMessages: alertMessagesReducer,
  loginData: loginReducer,
  signUpData: signUpReducer,
  authData: authReducer,
  profileHeader: headerReducer,
  programSettingsData: programSettingsReducer,
  passwordRestoreData: passwordRestoreReducer,
  navigationData: navigationReducer,
  notifications: notificationsReducer,
  accountSettings: accountSettingsReducer,
  ui: uiReducer,
  wallet: walletReducer,
  emailPending: emailPendingReducer,
  notificationSettings: notificationSettingsReducer
});

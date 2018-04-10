import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import { routerReducer } from "react-router-redux";

import alertMessagesReducer from "../shared/modules/alert-message/reducers/alert-message-reducers";
import authReducer from "./auth-reducer";
import dashboardReducer from "../modules/dashboard/reducers/dashboard-reducers";
import emailConfirmReducer from "../modules/email-confirm/reducers/email-confirm-reducers";
import loginReducer from "../modules/login/reducers/login-reducers";
import passwordResetReducer from "../modules/password-reset/reducers/password-reset-reducers";
import popupReducer from "../modules/popup/reducers/popup-reducers";
import profileReducer from "../modules/profile/reducers/profile-reducers";
import programSettingsReducer from "../modules/program-settings/reducers/program-settings-reducers";
import registerReducer from "../modules/register/reducers/register-reducers";
import traderCloseReducer from "../modules/trader-close/reducers/trader-close-reducers";
import traderDepositReducer from "../modules/trader-deposit/reducers/trader-deposit-reducers";
import traderReducer from "../modules/trader/reducers/trader-reducers";
import programsReducer from "../modules/programs/reducers/programs-reducers";
import traderWithdrawReducer from "../modules/trader-withdraw/reducers/trader-withdraw-reducers";
import walletPaneReducer from "../modules/wallet-pane/reducers/wallet-pane-reducers";
import walletReducer from "../modules/wallet/reducers/wallet-reducers";

export default combineReducers({
  routing: routerReducer,
  loadingBar: loadingBarReducer,
  tradersData: programsReducer,
  traderData: traderReducer,
  loginData: loginReducer,
  registerData: registerReducer,
  authData: authReducer,
  emailConfirmData: emailConfirmReducer,
  passwordResetData: passwordResetReducer,
  alertMessages: alertMessagesReducer,
  profileData: profileReducer,
  walletData: walletReducer,
  walletPaneData: walletPaneReducer,
  dashboardData: dashboardReducer,
  traderDepositData: traderDepositReducer,
  traderWithdrawData: traderWithdrawReducer,
  traderCloseData: traderCloseReducer,
  popupData: popupReducer,
  programSettingsData: programSettingsReducer
});

import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import { routerReducer } from "react-router-redux";

import alertMessagesReducer from "../shared/modules/alert-message/reducers/alert-message-reducers";
import authReducer from "./auth-reducer";
import dashboardReducer from "../modules/dashboard/reducers/dashboard-reducers";
import emailConfirmReducer from "../modules/email-confirm/reducers/email-confirm-reducers";
import loginReducer from "../modules/login/reducers/login-reducers";
import passwordResetReducer from "../modules/password-reset/reducers/password-reset-reducers";
import platformReducer from "./platform-reducer";
import popupReducer from "../modules/popup/reducers/popup-reducers";
import profileReducer from "../modules/profile/reducers/profile-reducers";
import programClosePeriodReducer from "../modules/program-close-period/reducers/program-close-period-reducers";
import programCloseReducer from "../modules/program-close/reducers/program-close-reducers";
import programDepositReducer from "../modules/program-deposit/reducers/program-deposit-reducers";
import programReducer from "../modules/program/reducers/program-reducers";
import programSettingsReducer from "../modules/program-settings/reducers/program-settings-reducers";
import programsReducer from "../modules/programs/reducers/programs-reducers";
import programTournamentReducer from "../modules/program-tournament/reducers/program-tournament-reducers";
import programWithdrawReducer from "../modules/program-withdraw/reducers/program-withdraw-reducers";
import registerReducer from "../modules/register/reducers/register-reducers";
import walletReducer from "../modules/wallet/reducers/wallet-reducers";

export default combineReducers({
  routing: routerReducer,
  loadingBar: loadingBarReducer,
  platformData: platformReducer,
  programsData: programsReducer,
  programData: programReducer,
  loginData: loginReducer,
  registerData: registerReducer,
  authData: authReducer,
  emailConfirmData: emailConfirmReducer,
  passwordResetData: passwordResetReducer,
  alertMessages: alertMessagesReducer,
  profileData: profileReducer,
  walletData: walletReducer,
  dashboardData: dashboardReducer,
  programDepositData: programDepositReducer,
  programWithdrawData: programWithdrawReducer,
  programCloseData: programCloseReducer,
  programClosePeriodData: programClosePeriodReducer,
  popupData: popupReducer,
  programSettingsData: programSettingsReducer,
  programTournamentData: programTournamentReducer
});

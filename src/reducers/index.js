import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import { routerReducer } from "react-router-redux";

import alertMessagesReducer from "../shared/modules/alert-message/reducers/alert-message-reducers";
import authReducer from "./authReducer";
import dashboardReducer from "../modules/dashboard/reducers/dashboard-reducers";
import loginReducer from "../modules/login/reducers/login-reducers";
import profileReducer from "../modules/profile/reducers/profile-reducers";
import programReducer from "../modules/programs/reducers/program-reducers";
import registerReducer from "../modules/register/reducers/register-reducers";
import traderDepositReducer from "../modules/trader-deposit/reducers/trader-deposit-reducers";
import traderReducer from "../modules/traders/reducers/trader-reducers";
import tradersReducer from "../modules/traders/reducers/traders-reducers";
import traderWithdrawReducer from "../modules/trader-withdraw/reducers/trader-withdraw-reducers";
import walletAddressReducer from "../modules/wallet/reducers/wallet-address-reducer";
import walletReducer from "../modules/wallet/reducers/wallet-reducers";
import walletTransactionsReducer from "../modules/wallet/reducers/wallet-transactions-reducer";

export default combineReducers({
  routing: routerReducer,
  loadingBar: loadingBarReducer,
  tradersData: tradersReducer,
  traderData: traderReducer,
  loginData: loginReducer,
  registerData: registerReducer,
  authData: authReducer,
  alertMessages: alertMessagesReducer,
  profileData: profileReducer,
  walletData: walletReducer,
  walletTransactionsData: walletTransactionsReducer,
  walletAddressData: walletAddressReducer,
  dashboardData: dashboardReducer,
  traderDepositData: traderDepositReducer,
  traderWithdrawData: traderWithdrawReducer,
  programFormData: programReducer
});

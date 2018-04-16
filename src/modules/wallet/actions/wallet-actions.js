import authService from "../../../services/auth-service";
import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

import * as actionTypes from "./wallet-actions.constants";

const fetchWallet = () => {
  return {
    type: actionTypes.WALLET,
    payload: SwaggerManagerApi.apiManagerWalletGet(authService.getAuthArg())
  };
};

const fetchWalletAddress = () => {
  return {
    type: actionTypes.WALLET_ADDRESS,
    payload: SwaggerManagerApi.apiManagerWalletAddressGet(
      authService.getAuthArg()
    )
  };
};

const fetchWalletTransactionProgramFilter = () => {
  return {
    type: actionTypes.WALLET_FILER_PANE_PROGRAMS,
    payload: SwaggerManagerApi.apiManagerWalletTransactionsInvestmentProgramsListGet(
      authService.getAuthArg()
    )
  };
};

const walletWithdraw = withdrawData => {
  const data = {
    request: withdrawData
  };
  return {
    type: actionTypes.WALLET_WITHDRAW,
    payload: SwaggerManagerApi.apiManagerWalletWithdrawRequestPost(
      authService.getAuthArg(),
      data
    )
  };
};

const walletActions = {
  fetchWallet,
  fetchWalletAddress,
  walletWithdraw,
  fetchWalletTransactionProgramFilter
};
export default walletActions;

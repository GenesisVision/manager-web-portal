import authService from "../../../services/auth-service";
import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";
import * as actionTypes from "./wallet-pane-actions.constants";

const fetchWalletPaneTransactions = () => {
  const data = {
    filter: {
      take: 5
    }
  };
  return {
    type: actionTypes.WALLET_PANE_TRANSACTIONS,
    payload: SwaggerManagerApi.apiManagerWalletTransactionsPost(
      authService.getAuthArg(),
      data
    )
  };
};

const fetchWalletPaneChart = () => {
  const data = {
    filter: {
      type: "All",
      isFull: false
    }
  };
  return {
    type: actionTypes.WALLET_PANE_CHART,
    payload: SwaggerManagerApi.apiManagerWalletStatisticPost(
      authService.getAuthArg(),
      data
    )
  };
};

const walletPaneActions = {
  fetchWalletPaneTransactions,
  fetchWalletPaneChart
};
export default walletPaneActions;

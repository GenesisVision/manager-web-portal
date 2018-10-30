import authService from "services/auth-service";
import { managerApiProxy } from "services/api-client/manager-api";
import { alertMessageActions } from "shared/modules/alert-message/actions/alert-message-actions";

export const getFundWithdrawInfo = (id, fundCurrency) => (
  dispatch,
  getState
) => {
  const { accountSettings } = getState();
  return managerApiProxy.v10ManagerFundsByIdWithdrawInfoByCurrencyGet(
    id,
    fundCurrency,
    authService.getAuthArg()
  );
};
export const alert = (type, text, translate = false) => dispatch =>
  dispatch(alertMessageActions[type](text, translate));

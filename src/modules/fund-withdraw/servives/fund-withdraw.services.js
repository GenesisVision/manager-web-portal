import { managerApiProxy } from "services/api-client/manager-api";
import authService from "services/auth-service";
import { alertMessageActions } from "shared/modules/alert-message/actions/alert-message-actions";

export const getFundWithdrawInfo = id => (dispatch, getState) => {
  const { accountSettings } = getState();
  return managerApiProxy.v10ManagerFundsByIdWithdrawInfoByCurrencyGet(
    id,
    accountSettings.currency,
    authService.getAuthArg()
  );
};
export const alert = (type, text, translate = false) => dispatch =>
  dispatch(alertMessageActions[type](text, translate));

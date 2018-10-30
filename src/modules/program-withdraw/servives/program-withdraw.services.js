import authService from "services/auth-service";
import { alertMessageActions } from "shared/modules/alert-message/actions/alert-message-actions";
import { managerApiProxy } from "services/api-client/manager-api";

export const getProgramWithdrawInfo = (id,programCurrency) => (dispatch, getState) => {
  const { accountSettings } = getState();
  return managerApiProxy.v10ManagerProgramsByIdWithdrawInfoByCurrencyGet(
    id,
    programCurrency,
    authService.getAuthArg()
  );
};

export const alert = (type, text, translate = false) => dispatch =>
  dispatch(alertMessageActions[type](text, translate));

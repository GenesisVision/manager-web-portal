import { investorApiProxy } from "services/api-client/investor-api";
import authService from "services/auth-service";
import { alertMessageActions } from "shared/modules/alert-message/actions/alert-message-actions";
import { managersApiProxy } from "services/api-client/managers-api";

export const getProgramWithdrawInfo = id => (dispatch, getState) => {
  const { accountSettings } = getState();
  return managersApiProxy.v10ManagersProgramsByIdWithdrawInfoByCurrencyGet(
    id,
    accountSettings.currency,
    authService.getAuthArg()
  );
};

export const withdrawProgramById = (id, amount) => {
  return managersApiProxy
    .v10ManagersProgramsByIdWithdrawByAmountPost(
      id,
      amount,
      authService.getAuthArg()
    )
    .then(response => {
      alertMessageActions.success(
        "program-withdraw.success-alert-message",
        true
      );
      return response;
    });
};

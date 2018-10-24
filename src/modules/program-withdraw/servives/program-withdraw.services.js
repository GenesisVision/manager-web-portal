import { investorApiProxy } from "services/api-client/investor-api";
import authService from "services/auth-service";
import { alertMessageActions } from "shared/modules/alert-message/actions/alert-message-actions";
import { managerApiProxy } from "services/api-client/manager-api";

export const getProgramWithdrawInfo = id => (dispatch, getState) => {
  const { accountSettings } = getState();
  return managerApiProxy.v10ManagersProgramsByIdWithdrawInfoByCurrencyGet(
    id,
    accountSettings.currency,
    authService.getAuthArg()
  );
};

export const getFundWithdrawInfo = id => (dispatch, getState) => {
  const { accountSettings } = getState();
  return managerApiProxy.v10ManagersFundsByIdWithdrawInfoByCurrencyGet(
    id,
    accountSettings.currency,
    authService.getAuthArg()
  );
};

export const withdrawProgramById = (id, amount) => {
  return managerApiProxy
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

export const withdrawFundById = (id, amount) => {
  return managerApiProxy
    .v10ManagersFundsByIdWithdrawByAmountPost(
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

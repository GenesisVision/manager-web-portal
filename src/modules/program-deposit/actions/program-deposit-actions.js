import authService from "../../../services/auth-service";
import filesService from "../../../shared/services/file-service";
import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

import * as actionTypes from "./program-deposit-actions.constants";

const fetchProgramDeposit = programId => {
  return {
    type: actionTypes.PROGRAM_DEPOSIT,
    payload: SwaggerManagerApi.apiManagerInvestmentProgramBuyTokensGet(
      programId,
      authService.getAuthArg()
    )
    // .then(response => {
    //   const trader = response;
    //   trader.logo = filesService.getFileUrl(trader.logo);
    //   return response;
    // })
  };
};

const submitProgramDeposit = (programId, amount) => {
  const model = {
    investmentProgramId: programId,
    amount
  };
  return {
    type: actionTypes.PROGRAM_DEPOSIT_SUBMIT,
    payload: SwaggerManagerApi.apiManagerInvestmentInvestPost(
      authService.getAuthArg(),
      { model }
    )
  };
};

const programDepositActions = {
  fetchProgramDeposit,
  submitProgramDeposit
};
export default programDepositActions;

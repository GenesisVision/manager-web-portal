import authService from "../../../services/auth-service";
import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

import * as actionTypes from "./trader-withdraw-actions.constants";

/*const fetchTraderWithdraw = traderId => {
  return {
    type: actionTypes.TRADER_WITHDRAW,
    payload: Promise.resolve({
      id: "1",
      name: "Program A",
      rate: 0.22,
      available: 100
    })
  };
};*/

const submitTraderWithdraw = (traderId, amount) => {
  const model = {
    investmentProgramId: traderId,
    amount
  };
  return {
    type: actionTypes.TRADER_WITHDRAW_SUBMIT,
    payload: SwaggerManagerApi.apiManagerInvestmentProgramsWithdrawPost(
      authService.getAuthArg(),
      { model }
    )
  };
};

const traderWithdrawActions = {
  /*fetchTraderWithdraw,*/
  submitTraderWithdraw
};
export default traderWithdrawActions;

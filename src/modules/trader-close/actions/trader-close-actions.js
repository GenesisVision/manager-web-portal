import authService from "../../../services/auth-service";
import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

import * as actionTypes from "./trader-close-actions.constants";

const traderClose = traderId => {
  return {
    type: actionTypes.TRADER_CLOSE,
    payload: SwaggerManagerApi.apiManagerInvestmentClosePost(
      traderId,
      authService.getAuthArg()
    )
  };
};

const traderCloseActions = {
  traderClose
};
export default traderCloseActions;

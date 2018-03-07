import authService from "../../../services/authService";
import filesService from "../../../shared/services/file-service";
import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

import * as actionTypes from "./traders-actions.constants";

const fetchTraders = () => {
  return {
    type: actionTypes.TRADERS,
    payload: SwaggerManagerApi.apiManagerInvestmentProgramsPost().then(
      response => {
        response.investmentPrograms.forEach(x => {
          x.logo = filesService.getFileUrl(x.logo);
        });

        return response;
      }
    )
  };
};

const fetchTrader = traderId => {
  return {
    type: actionTypes.TRADER,
    payload: SwaggerManagerApi.apiManagerInvestmentProgramGet(traderId).then(
      response => {
        const trader = response.investmentProgram;
        trader.logo = filesService.getFileUrl(trader.logo);
        return response;
      }
    )
  };
};

const closeTraderProgram = traderId => {
  return {
    type: actionTypes.TRADER,
    payload: SwaggerManagerApi.apiManagerInvestmentClosePost(
      traderId,
      authService.getAuthArg()
    )
  };
};

const tradersActions = { fetchTraders, fetchTrader, closeTraderProgram };
export default tradersActions;

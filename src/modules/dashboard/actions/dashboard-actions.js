import authService from "../../../services/auth-service";
import filesService from "../../../shared/services/file-service";
import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

import * as actionTypes from "./dashboard-actions.constants";

const fetchDashboardPrograms = () => {
  const filter = { type: "All" };
  return {
    type: actionTypes.DASHBOARD_PROGRAMS,
    payload: SwaggerManagerApi.apiManagerDashboardProgramsGet(
      authService.getAuthArg(),
      { filter }
    ).then(response => {
      response.investmentPrograms.forEach(x => {
        x.logo = filesService.getFileUrl(x.logo);
      });

      return response;
    })
  };
};

const fetchDashboardInfo = () => {
  return {
    type: actionTypes.DASHBOARD_INFO,
    payload: SwaggerManagerApi.apiManagerDashboardStatisticGet(
      authService.getAuthArg()
    )
  };
};

const dashboardActions = { fetchDashboardPrograms, fetchDashboardInfo };
export default dashboardActions;

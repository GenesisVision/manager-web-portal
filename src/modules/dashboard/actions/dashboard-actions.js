import authService from "../../../services/auth-service";
import filesService from "../../../shared/services/file-service";
import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

import * as actionTypes from "./dashboard-actions.constants";
import filteringActionsFactory from "../../filtering/actions/filtering-actions";

const fetchDashboardPrograms = () => (dispatch, getState) => {
  const { filtering } = getState().dashboardData.programs;
  let filter = {};
  if (filtering.type) {
    filter.type = filtering.type;
  }

  return dispatch({
    type: actionTypes.DASHBOARD_PROGRAMS,
    payload: SwaggerManagerApi.apiManagerDashboardProgramsPost(
      authService.getAuthArg(),
      { filter }
    ).then(response => {
      response.investmentPrograms.forEach(x => {
        x.logo = filesService.getFileUrl(x.logo);
      });

      return response;
    })
  });
};

const fetchDashboardInfo = () => {
  return {
    type: actionTypes.DASHBOARD_INFO,
    payload: SwaggerManagerApi.apiManagerDashboardStatisticGet(
      authService.getAuthArg()
    )
  };
};

const updateFiltering = filter => dispatch => {
  dispatch(updateWalletTransactionsFiltering(filter));
  dispatch(fetchDashboardPrograms());
};

const updateWalletTransactionsFiltering = filter => {
  const filteringActions = filteringActionsFactory(
    actionTypes.DASHBOARD_PROGRAMS
  );

  return filteringActions.updateFiltering(filter);
};

const dashboardActions = {
  fetchDashboardPrograms,
  fetchDashboardInfo,
  updateFiltering
};
export default dashboardActions;

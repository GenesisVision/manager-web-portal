import authService from "../../../services/auth-service";
import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

import * as actionTypes from "./dashboard-actions.constants";

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
    )
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

const dashboardFiltering = filter => ({
  type: actionTypes.DASHBOARD_FILTERING,
  filter
});

const updateFiltering = filter => dispatch => {
  dispatch(dashboardFiltering(filter));
  dispatch(fetchDashboardPrograms());
};

const dashboardActions = {
  fetchDashboardPrograms,
  fetchDashboardInfo,
  updateFiltering
};
export default dashboardActions;

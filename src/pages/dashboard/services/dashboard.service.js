import authService from "services/auth-service";

import * as actions from "../actions/dashboard.actions";

export const getPortfolioEvents = () => (dispatch, getState) => {
  const authorization = authService.getAuthArg();

  dispatch(actions.fetchPortfolioEvents(authorization, { take: 5 }));
};

export const getAssetChart = (assetId, assetType) => (dispatch, getState) => {
  const { currency } = getState().accountSettings;
  const chartFilter = {
    currency,
    // dateFrom: period.start,
    // dateTo: period.end,
    maxPointCount: 100
  };
  if (assetType === "Program") {
    dispatch(actions.fetchProgramProfitChart(assetId, chartFilter));
  } else {
    dispatch(actions.fetchFundProfitChart(assetId, chartFilter));
  }
};

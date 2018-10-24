import investorApi from "services/api-client/investor-api";
import { managerApiProxy } from "services/api-client/manager-api";
import { managersApiProxy } from "services/api-client/managers-api";

export const DASHBOARD_PORTFOLIO_CHART = "DASHBOARD_PORTFOLIO_CHART";
export const DASHBOARD_PORTFOLIO_EVENTS = "DASHBOARD_PORTFOLIO_EVENTS";
export const DASHBOARD_IN_REQUESTS = "DASHBOARD_IN_REQUESTS";
export const DASHBOARD_CANCEL_FUND_REQUESTS = "DASHBOARD_CANCEL_FUND_REQUESTS";
export const DASHBOARD_CANCEL_PROGRAM_REQUESTS =
  "DASHBOARD_CANCEL_PROGRAM_REQUESTS";

export const fetchPortfolioChart = (auth, filters) => {
  return {
    type: DASHBOARD_PORTFOLIO_CHART,
    payload: investorApi.v10InvestorPortfolioChartGet(auth, filters)
  };
};

export const fetchPortfolioEvents = (auth, filters) => {
  return {
    type: DASHBOARD_PORTFOLIO_EVENTS,
    payload: managerApiProxy.v10ManagerEventsGet(auth, filters)
  };
};

export const fetchInRequests = (auth, skip, take) => {
  return {
    type: DASHBOARD_IN_REQUESTS,
    payload: managersApiProxy.v10ManagersRequestsBySkipByTakeGet(
      skip,
      take,
      auth
    )
  };
};

export const cancelFundRequest = (auth, id) => {
  return {
    type: DASHBOARD_CANCEL_FUND_REQUESTS,
    payload: managersApiProxy.v10ManagersFundsRequestsByIdCancelPost(id, auth)
  };
};

export const cancelProgramRequest = (auth, id) => {
  return {
    type: DASHBOARD_CANCEL_PROGRAM_REQUESTS,
    payload: managersApiProxy.v10ManagersProgramsRequestsByIdCancelPost(
      id,
      auth
    )
  };
};

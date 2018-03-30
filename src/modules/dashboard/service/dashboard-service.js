import dashboardActions from "../actions/dashboard-actions";

const updateAfterInvestment = traderId => dispatch => {
  return Promise.all([dispatch(dashboardActions.fetchDashboardPrograms())]);
};

const dashboardService = { updateAfterInvestment };

export default dashboardService;

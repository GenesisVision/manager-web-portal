import authService from "services/auth-service";

import { fetchDashboardPrograms } from "../actions/dashboard.actions";

export const getDashboardPrograms = filters => (dispatch, getState) => {
  const auth = authService.getAuthArg();
  dispatch(fetchDashboardPrograms(auth, filters));
};

import { DASHBOARD_FILTERING } from "../actions/dashboard-actions.constants";

function filtering(filtering = { type: "All" }, action) {
  if (action.type === DASHBOARD_FILTERING) {
    return action.filter;
  }
  return filtering;
}

export default filtering;

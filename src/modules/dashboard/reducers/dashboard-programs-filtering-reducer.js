import filteringReducerFactory from "../../filtering/reducers/filtering-reducers";

import { DASHBOARD_FILTERS } from "../dashboard.constants";
import { DASHBOARD_PROGRAMS } from "../actions/dashboard-actions.constants";

const dashboardProgramsFilteringReducer = filteringReducerFactory({
  type: DASHBOARD_PROGRAMS,
  filters: DASHBOARD_FILTERS
});

export default dashboardProgramsFilteringReducer;

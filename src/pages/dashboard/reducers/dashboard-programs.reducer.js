import { DEFAULT_PAGING } from "modules/table/reducers/table-paging.reducer";
import tableReducerFactory from "modules/table/reducers/table.reducer";

import { DASHBOARD_PROGRAMS } from "../actions/dashboard.actions";
import { DASHBOARD_PROGRAMS_FILTERS } from "../dashboard.constants";

const dashboardProgramsReducer = tableReducerFactory({
  type: DASHBOARD_PROGRAMS,
  paging: DEFAULT_PAGING,
  filtering: DASHBOARD_PROGRAMS_FILTERS
});

export default dashboardProgramsReducer;

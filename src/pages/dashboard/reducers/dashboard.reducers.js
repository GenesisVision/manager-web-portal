import { combineReducers } from "redux";

import dashboardEventsReducer from "./dashboard-events.reducer";
import dashboardFundsReducer from "./dashboard-funds.reducer";
import dashboardInRequestsReducer from "./dashboard-in-requests.reducer";
import dashboardProgramsReducer from "./dashboard-programs.reducer";

const dashboardReducer = combineReducers({
  inRequestsData: dashboardInRequestsReducer,
  eventsData: dashboardEventsReducer,
  programs: dashboardProgramsReducer,
  funds: dashboardFundsReducer
});

export default dashboardReducer;

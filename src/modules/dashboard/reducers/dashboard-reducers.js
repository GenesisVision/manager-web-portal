import { combineReducers } from "redux";

import dashboardInfoReducer from "./dashboard-info-reducer";
import dashboardProgramsReducer from "./dashboard-program-reducer";

const dashboardReducer = combineReducers({
  programs: dashboardProgramsReducer,
  info: dashboardInfoReducer
});
export default dashboardReducer;

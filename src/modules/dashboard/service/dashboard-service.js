import dashboardActions from "../actions/dashboard-actions";
import history from "../../../utils/history";
import replaceParams from "../../../utils/replace-params";

import { PROGRAM_SETTINGS_EDIT_ROUTE } from "../../program-settings/program-settings.constants";

const updateAfterInvestment = programId => dispatch => {
  return Promise.all([dispatch(dashboardActions.fetchDashboardPrograms())]);
};

const openEditProgramPage = programId => {
  history.push(
    replaceParams(PROGRAM_SETTINGS_EDIT_ROUTE, {
      ":programId": programId
    })
  );
};

const dashboardService = { updateAfterInvestment, openEditProgramPage };
export default dashboardService;

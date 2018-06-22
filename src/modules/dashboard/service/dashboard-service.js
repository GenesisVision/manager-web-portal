import fileService from "../../../shared/services/file-service";
import history from "../../../utils/history";
import replaceParams from "../../../utils/replace-params";
import { PROGRAM_SETTINGS_EDIT_ROUTE } from "../../program-settings/program-settings.constants";
import dashboardActions from "../actions/dashboard-actions";

const updateLogo = (() => fileService.addLogoSrc("investmentPrograms"))();

const fetchDashboardPrograms = () => dispatch => {
  return dispatch(dashboardActions.fetchDashboardPrograms(updateLogo));
};

const updateFiltering = filter => dispatch => {
  return dispatch(dashboardActions.updateFiltering(filter, updateLogo));
};

const updateAfterInvestment = programId => dispatch => {
  return Promise.all([
    dispatch(dashboardActions.fetchDashboardPrograms(updateLogo))
  ]);
};

const openEditProgramPage = programId => {
  history.push(
    replaceParams(PROGRAM_SETTINGS_EDIT_ROUTE, {
      ":programId": programId
    })
  );
};

const dashboardService = {
  updateAfterInvestment,
  openEditProgramPage,
  fetchDashboardPrograms,
  updateFiltering
};
export default dashboardService;

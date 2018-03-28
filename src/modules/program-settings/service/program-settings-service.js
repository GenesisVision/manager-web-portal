import { alertMessageActions } from "../../../shared/modules/alert-message/actions/alert-message-actions";
import history from "../../../utils/history";
import programSettingsActions from "../actions/program-settings-actions";

import { HOME_ROUTE } from "../../../components/app.constants";

const createProgram = programData => dispatch => {
  return dispatch(programSettingsActions.submitProgramForm(programData)).then(
    response => {
      history.push(HOME_ROUTE);
      dispatch(alertMessageActions.success("Program was created successfully"));
      return response;
    }
  );
};

const programSettingsService = { createProgram };
export default programSettingsService;

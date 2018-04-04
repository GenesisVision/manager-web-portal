import moment from "moment";

import { alertMessageActions } from "../../../shared/modules/alert-message/actions/alert-message-actions";
import filesService from "../../../shared/services/file-service";
import history from "../../../utils/history";
import programSettingsActions from "../actions/program-settings-actions";

import { HOME_ROUTE } from "../../../components/app.constants";

const createProgram = programData => dispatch => {
  const data = {
    ...programData
  };
  if (data.dateTo) {
    data.dateTo = moment(data.dateTo)
      .set({
        second: 0,
        millisecond: 0
      })
      .toISOString();
  }

  return filesService
    .uploadFile(data.logo)
    .then(response => {
      const data = {
        ...programData,
        logo: response
      };
      return dispatch(programSettingsActions.submitProgramForm(data));
    })
    .then(response => {
      history.push(HOME_ROUTE);
      return response;
    })
    .then(response =>
      dispatch(alertMessageActions.success("Program was created successfully"))
    );
};

const programSettingsService = { createProgram };
export default programSettingsService;

import moment from "moment";

import { alertMessageActions } from "../../../shared/modules/alert-message/actions/alert-message-actions";
import filesService from "../../../shared/services/file-service";
import history from "../../../utils/history";
import programSettingsActions from "../actions/program-settings-actions";
import replaceParams from '../../../utils/replace-params';

import { HOME_ROUTE } from "../../../components/app.constants";
import { TRADER_ROUTE } from '../../trader/trader.constants';

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
    .uploadFile(data.logoBlob)
    .then(response => {
      const data = {
        ...programData,
        logo: response
      };
      return dispatch(programSettingsActions.createProgram(data));
    })
    .then(response => {
      history.push(HOME_ROUTE);
      return response;
    })
    .then(response =>
      dispatch(alertMessageActions.success("Program was created successfully"))
    );
};

const editProgram = (programId, programData) => dispatch => {
 
  let promise = Promise.resolve(null);
  if(programData.logo.size){
    promise = filesService.uploadFile(programData.logo)
  }

  return promise.then(response => {
      const data = {
        id: programId,
        ...programData,
        logo: response
      };
      return dispatch(programSettingsActions.editProgram(data));
    })
    .then(response => {
      history.push(replaceParams(TRADER_ROUTE, {
        ":traderId": programId
      }));
      return response;
    })
    .then(response =>
      dispatch(alertMessageActions.success("Program was updated successfully"))
    );
};

const programSettingsService = { createProgram, editProgram };
export default programSettingsService;

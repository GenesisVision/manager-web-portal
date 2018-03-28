import authService from "../../../services/auth-service";
import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";
import moment from "moment";

import * as actionTypes from "./program-settings-actions.constants";

const fetchProgramForm = () => {
  return {
    type: actionTypes.PROGRAM_FORM,
    payload: SwaggerManagerApi.apiManagerBrokersPost()
  };
};

const submitProgramForm = formData => {
  const submitData = {
    ...formData
  };
  if (formData.dateFrom) {
    submitData.dateFrom = moment(formData.dateFrom)
      .set({
        second: 0,
        millisecond: 0
      })
      .toISOString();
  }
  if (formData.dateTo) {
    submitData.dateTo = moment(formData.dateTo)
      .set({
        second: 0,
        millisecond: 0
      })
      .toISOString();
  }
  const data = {
    request: submitData
  };
  return {
    type: actionTypes.PROGRAM_FORM_SUBMIT,
    payload: SwaggerManagerApi.apiManagerAccountNewInvestmentRequestPost(
      authService.getAuthArg(),
      data
    )
  };
};

const programSettingsActions = { fetchProgramForm, submitProgramForm };
export default programSettingsActions;

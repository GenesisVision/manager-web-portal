import authService from "../../../services/auth-service";
import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

import * as actionTypes from "./program-settings-actions.constants";

const fetchProgramForm = () => {
  return {
    type: actionTypes.PROGRAM_FORM,
    payload: SwaggerManagerApi.apiManagerBrokersPost()
  };
};

const submitProgramForm = programData => {
  const data = {
    request: programData
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

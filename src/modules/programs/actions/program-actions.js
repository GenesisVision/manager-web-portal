import authService from "../../../services/auth-service";
import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

import * as actionTypes from "./program-actions.constants";

const fetchProgramForm = () => {
  return {
    type: actionTypes.PROGRAM_FORM,
    payload: SwaggerManagerApi.apiManagerBrokersPost()
  };
};

const submitProgramForm = formData => {
  const data = {
    request: formData
  };
  return {
    type: actionTypes.PROGRAM_FORM_SUBMIT,
    payload: SwaggerManagerApi.apiManagerAccountNewInvestmentRequestPost(
      authService.getAuthArg(),
      data
    )
  };
};

const programActions = { fetchProgramForm, submitProgramForm };
export default programActions;

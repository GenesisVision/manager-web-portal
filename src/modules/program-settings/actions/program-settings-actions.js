import authService from "../../../services/auth-service";
import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

import * as actionTypes from "./program-settings-actions.constants";

const fetchProgramForm = () => {
  return {
    type: actionTypes.PROGRAM_SETTINGS_FETCH_FORM,
    payload: SwaggerManagerApi.apiManagerBrokersPost()
  };
};

const createProgram = programData => {
  const data = {
    request: programData
  };
  return {
    type: actionTypes.PROGRAM_SETTINGS_CREATE_FORM,
    payload: SwaggerManagerApi.apiManagerAccountNewInvestmentRequestPost(
      authService.getAuthArg(),
      data
    )
  };
};

const editProgram = programData => {
  const data = {
    request: programData
  };
  return {
    type: actionTypes.PROGRAM_SETTINGS_EDIT_FORM,
    payload: SwaggerManagerApi.apiManagerAccountNewInvestmentRequestPost(
      authService.getAuthArg(),
      data
    )
  };
};

const programSettingsActions = { fetchProgramForm, createProgram, editProgram };
export default programSettingsActions;

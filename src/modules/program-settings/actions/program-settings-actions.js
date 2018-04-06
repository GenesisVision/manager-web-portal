import authService from "../../../services/auth-service";
import filesService from "../../../shared/services/file-service";
import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

import * as actionTypes from "./program-settings-actions.constants";

const fetchProgramForm = () => {
  return {
    type: actionTypes.PROGRAM_SETTINGS_FETCH_FORM,
    payload: SwaggerManagerApi.apiManagerBrokersPost()
  };
};

const fetchProgramSettings = traderId => {
  let data = {
    authorization: authService.getAuthArg()
  };

  return {
    type: actionTypes.PROGRAM_SETTINGS,
    payload: SwaggerManagerApi.apiManagerInvestmentProgramGet(
      traderId,
      data
    ).then(response => {
      const program = response.investmentProgram;
      return {
        id: program.id,
        logo: filesService.getFileUrl(program.logo),
        title: program.title,
        description: program.description,
        isOwnProgram: program.isOwnProgram,
        login: program.login,
        broker: program.brokerTitle,
        brokerServer: program.brokerTradeServerTitle
      };
    })
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

const programSettingsActions = {
  fetchProgramForm,
  fetchProgramSettings,
  createProgram,
  editProgram
};
export default programSettingsActions;

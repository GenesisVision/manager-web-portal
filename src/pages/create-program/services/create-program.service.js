import { fetchProfileHeaderInfo } from "modules/header/actions/header-actions";
import brokersApi from "services/api-client/brokers-api";
import managersApi from "services/api-client/managers-api";
import authService from "services/auth-service";
import filesService from "shared/services/file-service";

import * as actions from "../actions/create-program.actions";
import { brokersResponseDataMock } from "./brokers-response-mock";

// import * as actions from "../actions/wallet.actions";

export const fetchBrokers = () => {
  // return
  brokersApi.v10BrokersGet().then(data => ({
    brokers: brokersResponseDataMock.brokers
  }));
  return { brokers: brokersResponseDataMock.brokers };
};

export const fetchBalance = () => dispatch =>
  dispatch(fetchProfileHeaderInfo());

export const createProgram = (createProgramData, setSubmitting) => dispatch => {
  const authorization = authService.getAuthArg();

  // dispatch(actions.createProgram(authorization, createProgramData));

  const data = {
    ...createProgramData
  };

  let promise = Promise.resolve(null);
  if (data.logo.cropped) {
    promise = filesService.uploadFile(data.logo.cropped, authorization);
  }
  debugger;
  return promise
    .then(response => {
      const data = {
        ...createProgramData,
        logo: response
      };
      return dispatch(actions.createProgram(authorization, data));
    })
    .then(response => {
      // history.push(HOME_ROUTE);
      return response;
    });
};

import { fetchProfileHeaderInfo } from "modules/header/actions/header-actions";
import brokersApi from "services/api-client/brokers-api";
import managersApi from "services/api-client/managers-api";
import authService from "services/auth-service";
import filesService from "shared/services/file-service";

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

export const createProgram = (createProgramData, setSubmitting) => {
  debugger;
  const authorization = authService.getAuthArg();

  const data = {
    ...createProgramData
  };

  managersApi
    .v10ManagersProgramsCreatePost(authorization, {
      request: { ...data, logo: "" }
    })
    .then(() => setSubmitting(false));

  // let promise = Promise.resolve(null);
  // if (data.logo.cropped) {
  //   promise = filesService.uploadFile(data.logo.cropped, authorization);
  // }
  // return promise
  //   .then(response => {
  //     const data = {
  //       ...createProgramData,
  //       logo: response
  //     };
  //     return managersApi.v10ManagersProgramsCreatePost(authorization, {
  //       request: { ...data, logo: "" }
  //     });
  //   })
  //   .then(response => {
  //     // history.push(HOME_ROUTE);
  //     setSubmitting(false);
  //     return response;
  //   });
};

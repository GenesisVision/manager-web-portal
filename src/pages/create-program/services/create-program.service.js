import { fetchProfileHeaderInfo } from "modules/header/actions/header-actions";
import brokersApi from "services/api-client/brokers-api";
import managersApi from "services/api-client/managers-api";
import authService from "services/auth-service";
import filesService from "shared/services/file-service";

import { getDataWithoutSuffixes } from "../helpers/create-program.helpers";
import { brokersResponseDataMock } from "./brokers-response-mock";

// import * as actions from "../actions/wallet.actions";

export const fetchBrokers = () => {
  return brokersApi.v10BrokersGet().then(data => {
    return {
      brokers: brokersResponseDataMock.brokers
    };
  });
};

export const fetchBalance = () => dispatch =>
  dispatch(fetchProfileHeaderInfo());

export const createProgram = async (createProgramData, setSubmitting) => {
  const authorization = authService.getAuthArg();

  let data = getDataWithoutSuffixes(createProgramData, [
    "periodLength",
    "successFee",
    "entryFee",
    "leverage"
  ]);

  let promise = Promise.resolve(null);

  if (data.logo.cropped) {
    promise = filesService.uploadFile(data.logo.cropped, authorization);
  }

  try {
    let logo = await promise;
    data = { ...data, logo };

    await managersApi.v10ManagersProgramsCreatePost(authorization, {
      request: data
    });
  } catch (error) {
    alert(error.message);
  }
  debugger;

  setSubmitting(false);

  // let promise = Promise.resolve(null);
  // if (data.logo.cropped) {
  //   promise = filesService.uploadFile(data.logo.cropped, authorization);
  // }
  // return promise.then(response => {
  //   const data = {
  //     ...createProgramData,
  //     logo: response
  //   };
  //   return managersApi
  //     .v10ManagersProgramsCreatePost(authorization, {
  //       request: { ...data, logo: "" }
  //     })
  //     .then(response => {
  //       // history.push(HOME_ROUTE);
  //       setSubmitting(false);
  //       return response;
  //     });
  //   debugger;
  // });
};

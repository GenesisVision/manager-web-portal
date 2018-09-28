import { fetchProfileHeaderInfo } from "modules/header/actions/header-actions";
import { DASHBOARD_ROUTE } from "pages/dashboard/dashboard.routes";
import { push } from "react-router-redux";
import { brokersApiProxy } from "services/api-client/brokers-api";
import { managersApiProxy } from "services/api-client/managers-api";
import authService from "services/auth-service";
import filesService from "shared/services/file-service";

import { getDataWithoutSuffixes } from "../helpers/create-program.helpers";

export const fetchBrokers = () => brokersApiProxy.v10BrokersGet();

export const fetchBalance = () => dispatch =>
  dispatch(fetchProfileHeaderInfo());

export const createProgram = (createProgramData, setSubmitting) => dispatch => {
  const authorization = authService.getAuthArg();

  let data = getDataWithoutSuffixes(createProgramData, [
    "periodLength",
    "successFee",
    "entryFee",
    "leverage"
  ]);

  let promise = Promise.resolve(null);
  if (data.logo.cropped) {
    promise = filesService.uploadFileProxy(data.logo.cropped, authorization);
  }
  promise
    .then(response => {
      data = {
        ...data,
        logo: response || ""
      };

      return managersApiProxy.v10ManagersProgramsCreatePost(authorization, {
        request: data
      });
    })
    .then(() => {
      setSubmitting(false);
      alert("Successful program creating.");
      dispatch(push(DASHBOARD_ROUTE));
    })
    .catch(error => {
      setSubmitting(false);
      alert(error.errorMessage);
    });
};

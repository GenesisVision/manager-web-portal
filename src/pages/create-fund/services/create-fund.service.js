import { fetchProfileHeaderInfo } from "modules/header/actions/header-actions";
import { DASHBOARD_ROUTE } from "pages/dashboard/dashboard.routes";
import { push } from "react-router-redux";
import authService from "services/auth-service";
import filesService from "shared/services/file-service";
import FundsApi from "services/api-client/funds-api";

import { getDataWithoutSuffixes } from "../helpers/create-fund.helpers";
import { managersApiProxy } from "services/api-client/managers-api";

export const fetchBalance = () => dispatch =>
  dispatch(fetchProfileHeaderInfo());

export const fetchAssets = () =>
  FundsApi.v10FundsAssetsGet(authService.getAuthArg());

export const fetchInvestmentAmount = () =>
  managersApiProxy.v10ManagersFundsInvestmentAmountGet(
    authService.getAuthArg()
  );

export const createFund = (createFundData, setSubmitting) => dispatch => {
  const authorization = authService.getAuthArg();

  let data = getDataWithoutSuffixes(createFundData, [
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

      return managersApiProxy.v10ManagersFundsCreatePost(authorization, {
        request: data
      });
    })
    .then(() => {
      setSubmitting(false);
      alert("Successful fund creating.");
      dispatch(push(DASHBOARD_ROUTE));
    })
    .catch(error => {
      setSubmitting(false);
      alert(error.errorMessage);
    });
};

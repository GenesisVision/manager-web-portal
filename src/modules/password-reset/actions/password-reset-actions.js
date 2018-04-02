import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

import * as actionTypes from "./password-reset-actions.constants";

const forgotPassword = fpForm => {
  return {
    type: actionTypes.RESET_PASSWORD,
    payload: SwaggerManagerApi.apiManagerAuthForgotPasswordPost(fpForm)
  };
};

const resetPassword = (userId, code, rpForm) => {
  const data = {
    userId,
    code,
    ...rpForm
  };
  return {
    type: actionTypes.RESET_PASSWORD,
    payload: SwaggerManagerApi.apiManagerAuthForgotPasswordPost(data)
  };
};

const passwordResetActions = { forgotPassword, resetPassword };

export default passwordResetActions;

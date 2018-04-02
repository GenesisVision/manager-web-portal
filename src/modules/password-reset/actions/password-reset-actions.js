import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

import * as actionTypes from "./password-reset-actions.constants";

const forgotPassword = fpForm => {
  const model = { ...fpForm };
  return {
    type: actionTypes.FORGOT_PASSWORD,
    payload: SwaggerManagerApi.apiManagerAuthForgotPasswordPost({ model })
  };
};

const resetPassword = (userId, code, rpForm) => {
  const model = {
    userId,
    code,
    ...rpForm
  };
  return {
    type: actionTypes.RESET_PASSWORD,
    payload: SwaggerManagerApi.apiManagerAuthResetPasswordPost({ model })
  };
};

const passwordResetActions = { forgotPassword, resetPassword };

export default passwordResetActions;

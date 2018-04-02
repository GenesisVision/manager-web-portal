import * as actionTypes from "./password-reset-actions.constants";

import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

const passwordResetRequest = email => {
  return {
    type: actionTypes.RESET_PASSWORD,
    payload: SwaggerManagerApi.apiManagerAuthPasswordResetPost({
      email
    })
  };
};

const passwordResetActions = { passwordResetRequest };

export default passwordResetActions;

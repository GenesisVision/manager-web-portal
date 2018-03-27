import * as actionTypes from "./email-confirm-actions.constants";

import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

const emailConfirm = (userId, code) => {
  return {
    type: actionTypes.EMAIL_CONFIRM,
    payload: SwaggerManagerApi.apiManagerAuthConfirmEmailPost({
      userId,
      code
    })
  };
};

const emailConfirmActions = { emailConfirm };

export default emailConfirmActions;

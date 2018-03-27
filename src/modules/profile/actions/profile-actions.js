import authService from "../../../services/auth-service";
import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

import * as actionTypes from "./profile-actions.constants";

const fetchProfile = () => {
  return {
    type: actionTypes.PROFILE,
    payload: SwaggerManagerApi.apiManagerProfileFullGet(
      authService.getAuthArg()
    )
  };
};

const profileActions = { fetchProfile };
export default profileActions;

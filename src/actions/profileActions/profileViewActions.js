import { SWAGGER_API_ACTION_TYPE } from "../../middleware/swagger-api-middleware/swagger-api-middleware";
import authService from "../../services/authService";
import swaggerManagerApi from "../../services/api-client/swagger-manager-api";

const profileViewActionTypes = {
  request: "PROFILE_VIEW_REQUEST",
  success: "PROFILE_VIEW_SUCCESS",
  failure: "PROFILE_VIEW_FAILURE"
};

const fetchProfile = () => {
  return {
    type: SWAGGER_API_ACTION_TYPE,
    meta: {
      type: "PROFILE_VIEW",
      promise: () => {
        const api = new swaggerManagerApi();
        const authorization = `Bearer1 ${authService.getToken()}`;
        return api.apiManagerProfileGet(authorization);
      }
    }
  };
};

const profileViewActions = { fetchProfile };

export { profileViewActionTypes, profileViewActions };

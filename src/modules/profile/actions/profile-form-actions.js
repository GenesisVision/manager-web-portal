import { ProfileFullViewModel } from "gv-api-web";

import authService from "../../../services/auth-service";
import history from "../../../utils/history";
import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

import { PROFILE_FORM } from "./profile-actions.constants";
import { PROFILE_ROUTE } from "../profile.constants";

const updateProfile = profileFormData => {
  const opts = {
    model: ProfileFullViewModel.constructFromObject(profileFormData)
  };
  return {
    type: PROFILE_FORM,
    payload: SwaggerManagerApi.apiManagerProfileUpdatePost(
      authService.getAuthArg(),
      opts
    ).then(response => {
      history.push(PROFILE_ROUTE);
      return response;
    })
  };
};

const cancelChanges = () => {
  history.push(PROFILE_ROUTE);
};

const profileFormActions = { updateProfile, cancelChanges };
export default profileFormActions;

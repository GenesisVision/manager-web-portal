import authService from "../../services/authService";
import { apiClientPublic } from "../../services/api-client/swagger-custom-client";
import { ManagerApi } from "gv-api-web";

const profileViewActionTypes = {
  request: "PROFILE_VIEW_REQUEST",
  success: "PROFILE_VIEW_SUCCESS",
  failure: "PROFILE_VIEW_FAILURE"
};

export const profileViewRequest = () => ({
  type: profileViewActionTypes.request
});

export const profileViewSuccess = profile => ({
  type: profileViewActionTypes.success,
  profile
});

export const profileViewError = message => ({
  type: profileViewActionTypes.failure,
  message
});

const fetchProfile = () => async dispatch => {
  dispatch(profileViewRequest());
  const api = new ManagerApi(apiClientPublic());
  const authorization = `Bearer ${authService.getToken()}`;

  api.apiManagerProfileGet(authorization).then(
    r => {
      const profile = {
        name: "Alex Smith",
        avatar: "http://placehold.it/380x500",
        birthday: "BIRTHDAY",
        passportNo: "3312 123432"
      };
      dispatch(profileViewSuccess(profile));
    },
    error => {
      dispatch(profileViewError(error));
    }
  );
};

const profileViewActions = { fetchProfile };

export { profileViewActionTypes, profileViewActions };

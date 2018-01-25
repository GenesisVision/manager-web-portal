import { setTimeout } from "timers";
import history from "../../utils/history";
import routes from "../../utils/constants/routes";

const profileEditActionTypes = {
  request: "PROFILE_EDIT_REQUEST",
  success: "PROFILE_EDIT_SUCCESS",
  failure: "PROFILE_EDIT_FAILURE"
};

export const profileEditRequest = () => ({
  type: profileEditActionTypes.request
});

export const profileEditSuccess = profile => ({
  type: profileEditActionTypes.success,
  profile
});

export const profileEditError = message => ({
  type: profileEditActionTypes.failure,
  message
});

const updateProfile = profile => async dispatch => {
  dispatch(profileEditRequest());
  //call api from swagger
  setTimeout(() => {
    dispatch(profileEditSuccess(profile));
    history.push(routes.profile);
  }, 1000);
};

const cancelChanges = () => {
  history.push(routes.profile);
};

const profileEditActions = { updateProfile, cancelChanges };

export { profileEditActionTypes, profileEditActions };

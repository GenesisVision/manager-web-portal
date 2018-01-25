import {
  ManagerApi,
  RegisterManagerViewModel
} from "../../services/api-client/swagger-api-client";
import { apiClientPublic } from "../../services/api-client/swagger-custom-client";
import history from "../../utils/history";
import routes from "../../utils/constants/routes";

const registerActionTypes = {
  request: "REGISTER_REQUEST",
  success: "REGISTER_SUCCESS",
  failure: "REGISTER_FAILURE"
};

export const registerRequest = () => ({
  type: registerActionTypes.request
});

export const registerSuccess = email => ({
  type: registerActionTypes.success,
  email
});

export const registerError = message => ({
  type: registerActionTypes.failure,
  message
});

const registerUser = user => async dispatch => {
  const { email } = user;
  dispatch(registerRequest());
  try {
    const api = new ManagerApi(apiClientPublic());
    const opts = {
      model: RegisterManagerViewModel.constructFromObject(user)
    };

    await api.apiManagerAuthSignUpPostWithHttpInfo(opts);
    history.push(routes.index);
    dispatch(registerSuccess(email));
  } catch (e) {
    const error = JSON.parse(e.response.text);
    dispatch(registerError(error.errors[0].message));
    throw new Error(error.errors[0].message);
  }
};

const registerActions = { registerUser };
export { registerActions, registerActionTypes };

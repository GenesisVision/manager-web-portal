import { apiClientPublic } from "../../services/api-client/swagger-custom-client";

import {
  ManagerApi,
  LoginViewModel
} from "gv-api-web";
import authService from '../../services/authService';
import history from "../../utils/history";
import routes from "../../utils/constants/routes";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginRequest = () => ({
  type: LOGIN_REQUEST
});

export const loginSuccess = email => ({
  type: LOGIN_SUCCESS,
  email
});

export const loginError = message => ({
  type: LOGIN_FAILURE,
  message
});

const loginUser = (user, from) => async dispatch => {
  const { email } = user;
  dispatch(loginRequest());

  const api = new ManagerApi(apiClientPublic());
  const opts = {
    model: LoginViewModel.constructFromObject(user)
  };

  try {
    const response = await api.apiManagerAuthSignInPostWithHttpInfo(opts);
    authService.storeToken(response.data);
    dispatch(loginSuccess(email));
    history.push(from.pathname);
  } catch (e) {
    const error = JSON.parse(e.response.text);
    dispatch(loginError(error.errors[0].message));
    e.responseError = error;
    throw e;
  }
};

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

const logoutRequest = () => ({
  type: LOGOUT_REQUEST
});

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

const logoutUser = () => dispatch => {
  dispatch(logoutRequest());
  authService.logout();
  history.push(routes.index);
  dispatch(logoutSuccess());
};

const loginActions = {
  loginUser,
  logoutUser
};

export default loginActions;

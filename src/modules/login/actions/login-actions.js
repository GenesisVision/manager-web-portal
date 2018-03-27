import { LoginViewModel } from "gv-api-web";

import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

import * as actionTypes from "./login-actions.constants";

const loginUser = loginData => ({
  type: actionTypes.LOGIN,
  payload: SwaggerManagerApi.apiManagerAuthSignInPostWithHttpInfo({
    model: LoginViewModel.constructFromObject(loginData)
  })
});

const loginActions = {
  loginUser
};

export default loginActions;

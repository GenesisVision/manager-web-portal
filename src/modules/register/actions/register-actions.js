import { RegisterManagerViewModel } from "gv-api-web";

import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

import * as actionTypes from "./register-actions.constants";

const registerUser = registerData => ({
  type: actionTypes.REGISTER,
  payload: SwaggerManagerApi.apiManagerAuthSignUpPostWithHttpInfo({
    model: RegisterManagerViewModel.constructFromObject(registerData)
  })
});

const registerActions = { registerUser };
export default registerActions;

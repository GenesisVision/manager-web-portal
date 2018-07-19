import { loadingBarMiddleware } from "react-redux-loading-bar";
import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, compose, createStore } from "redux";
import debounceMiddleware from "redux-debounced";
import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";

import rootReducer from "../reducers";
import SwaggerManagerApi from "../services/api-client/swagger-manager-api";
import authService from "../services/auth-service";
import apiErrorHandlerMiddleware from "../shared/middlewares/api-error-handler-middleware/api-error-handler-middleware";
import clearOnceMetaMiddleware from "../shared/middlewares/clear-once-meta-middleware/clear-once-meta-middleware";
import refreshTokenMiddleware from "../shared/middlewares/refresh-token-middleware/refresh-token-middleware";
import history from "../utils/history";

const failureSuffix = "FAILURE";
const suffixes = ["REQUEST", "SUCCESS", failureSuffix];

const reduxDevTools =
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

const initialState = {};
const enhancers = [];

if (reduxDevTools) {
  enhancers.push(reduxDevTools);
}

const middleware = [
  debounceMiddleware(),
  clearOnceMetaMiddleware(),
  thunk,
  refreshTokenMiddleware(
    authService,
    SwaggerManagerApi.apiManagerAuthUpdateTokenGet.bind(SwaggerManagerApi)
  ),
  promiseMiddleware({ promiseTypeSuffixes: suffixes }),
  apiErrorHandlerMiddleware({ failureSuffix: failureSuffix }),
  routerMiddleware(history),
  loadingBarMiddleware({
    promiseTypeSuffixes: suffixes
  })
];

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;

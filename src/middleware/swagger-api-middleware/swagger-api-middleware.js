export const SWAGGER_API_ACTION_TYPE = "@SWAGGER_API";

const composeAction = (type, payload = {}) => ({ type, payload });

const handleSuccess = (dispatch, type) => (value = null) => {
  const resolvedAction = composeAction([type, "SUCCESS"].join("_"), value);
  dispatch(resolvedAction);

  return { value, action: resolvedAction };
};

const handleError = (dispatch, type) => reason => {
  const rejectedAction = composeAction([type, "FAILURE"].join("_"), reason);
  dispatch(rejectedAction);

  throw reason;
};

const createSwaggerApiMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  if (action.type !== SWAGGER_API_ACTION_TYPE) {
    return next(action);
  }

  const { type, promise } = action.meta;

  next(composeAction([action.meta.type, "REQUEST"].join("_")));

  return promise().then(
    handleSuccess(dispatch, type),
    handleError(dispatch, type)
  );
};

export default createSwaggerApiMiddleware;

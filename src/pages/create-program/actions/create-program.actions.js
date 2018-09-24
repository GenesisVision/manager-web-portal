import managersApi from "services/api-client/managers-api";

export const CREATE_PROGRAM = "CREATE_PROGRAM";

export const createProgram = (authorization, data) => ({
  type: CREATE_PROGRAM,
  payload: managersApi.v10ManagersProgramsCreatePost(authorization, {
    request: data
  })
});

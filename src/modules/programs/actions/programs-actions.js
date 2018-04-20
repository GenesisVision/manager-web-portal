import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";

import * as actionTypes from "./programs-actions.constants";

const fetchPrograms = (
  filters,
  onResolve = response => Promise.resolve(response)
) => dispatch => {
  return dispatch({
    type: actionTypes.PROGRAMS,
    payload: SwaggerManagerApi.apiManagerInvestmentProgramsPost(filters).then(
      onResolve
    )
  });
};

const addFavoriteProgram = (
  { programId, authorization },
  onResolve = response => Promise.resolve(response)
) => dispatch => {
  return dispatch({
    type: actionTypes.PROGRAMS_FAVORITE_ADD,
    payload: SwaggerManagerApi.apiManagerInvestmentProgramsFavoritesAddPost(
      programId,
      authorization
    ).then(onResolve)
  });
};

const removeFavoriteProgram = (
  { programId, authorization },
  onResolve = response => Promise.resolve(response)
) => dispatch => {
  return dispatch({
    type: actionTypes.PROGRAMS_FAVORITE_ADD,
    payload: SwaggerManagerApi.apiManagerInvestmentProgramsFavoritesRemovePost(
      programId,
      authorization
    ).then(onResolve)
  });
};

const programsActions = {
  fetchPrograms,
  addFavoriteProgram,
  removeFavoriteProgram
};
export default programsActions;

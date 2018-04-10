
import filesService from "../../../shared/services/file-service";
import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";
import * as actionTypes from "./programs-actions.constants";


const fetchPrograms = (filters) => (dispatch) => {
  return dispatch({
    type: actionTypes.PROGRAMS,
    payload: SwaggerManagerApi.apiManagerInvestmentProgramsPost(filters).then(
      response => {
        response.investmentPrograms.forEach(x => {
          x.logo = filesService.getFileUrl(x.logo);
        });

        return response;
      }
    )
  });
};



const programsActions = {
  fetchPrograms
};
export default programsActions;

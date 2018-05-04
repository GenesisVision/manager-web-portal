import authService from "../../../services/auth-service";
import filesService from "../../../shared/services/file-service";
import SwaggerManagerApi from "../../../services/api-client/swagger-manager-api";
import { TOURNAMENT_PROGRAM_CREATE } from "./program-tournament.constants";

createTournamentProgram = request => ({
  type: TOURNAMENT_PROGRAM_CREATE,
  payload: SwaggerManagerApi.NewTournamentAccountRequest(
    authService.getAuthArg(),
    { request }
  )
});

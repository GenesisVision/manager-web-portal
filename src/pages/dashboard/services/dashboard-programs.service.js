import { managerApiProxy } from "services/api-client/manager-api";
import authService from "services/auth-service";

export const getDashboardPrograms = filters => {
  return managerApiProxy.v10ManagerProgramsGet(
    authService.getAuthArg(),
    filters
  );
};

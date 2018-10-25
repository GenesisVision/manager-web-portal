import { managerApiProxy } from "services/api-client/manager-api";
import authService from "services/auth-service";

export const getDashboardFunds = filters => {
  return managerApiProxy.v10ManagerFundsGet(authService.getAuthArg(), filters);
};

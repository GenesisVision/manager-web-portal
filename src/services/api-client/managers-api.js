import { ManagersApi } from "gv-api-web";

import withApiProxy from "./api-proxy";
import apiClient from "./swagger-custom-client";

const managersApi = new ManagersApi(apiClient);

export const managersApiProxy = withApiProxy(managersApi);
export default managersApi;

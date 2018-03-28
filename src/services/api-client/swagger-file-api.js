import { FilesApi } from "gv-api-web";

import apiClient from "./swagger-custom-client";

const SwaggerFileApi = new FilesApi(apiClient);

export default SwaggerFileApi;

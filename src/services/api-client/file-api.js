import { FileApi } from "gv-api-web";

import apiClient from "./swagger-custom-client";

const fileApi = new FileApi(apiClient);

export default fileApi;

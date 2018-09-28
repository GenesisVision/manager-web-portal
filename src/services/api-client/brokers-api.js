import { BrokersApi } from "gv-api-web";

import apiClient from "./swagger-custom-client";

const brokersApi = new BrokersApi(apiClient);

export default brokersApi;

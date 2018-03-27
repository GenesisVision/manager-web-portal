import { InvestorApi } from "gv-api-web";

import apiClient from "./swagger-custom-client";

const SwaggerManagerApi = new InvestorApi(apiClient);

export default SwaggerManagerApi;

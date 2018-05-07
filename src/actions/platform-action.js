import SwaggerManagerApi from "../services/api-client/swagger-manager-api";
export const PLATFORM_SETTINGS = "PLATFORM_SETTINGS";

const fetchPlatformSettings = {
  type: PLATFORM_SETTINGS,
  payload: SwaggerManagerApi.apiManagerPlatformStatusGet()
};

const platformActions = {
  fetchPlatformSettings
};

export default platformActions;

import SwaggerManagerApi from "../services/api-client/swagger-manager-api";
export const UPDATE_PLATFORM_STATUS = "UPDATE_PLATFORM_STATUS";

export function updatePlatformStatus() {
  return {
    type: UPDATE_PLATFORM_STATUS,
    payload: SwaggerManagerApi.apiManagerPlatformStatusGet().then(
      data => console.info(data) || data
    )
  };
}

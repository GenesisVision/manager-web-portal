import { UPDATE_PLATFORM_STATUS } from "../actions/platform-status-action";
import apiReducerFactory from "../shared/reducers/api-reducer/api-reducer";

export default apiReducerFactory({
  apiType: UPDATE_PLATFORM_STATUS
});

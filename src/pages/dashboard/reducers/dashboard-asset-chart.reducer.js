import apiReducerFactory from "shared/reducers/api-reducer/api-reducer";

import { DASHBOARD_ASSET_CHART } from "../actions/dashboard.actions";

const dashboardAssetChartReducer = apiReducerFactory({
  apiType: DASHBOARD_ASSET_CHART
});
export default dashboardAssetChartReducer;

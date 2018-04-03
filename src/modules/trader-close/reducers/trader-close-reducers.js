import apiReducerFactory from "../../../shared/reducers/api-reducer/api-reducer";

import { TRADER_CLOSE } from "../actions/trader-close-actions.constants";

const traderCloseReducer = apiReducerFactory({ apiType: TRADER_CLOSE });
export default traderCloseReducer;

import brokersApi from "services/api-client/brokers-api";
import authService from "services/auth-service";

import { brokersResponseDataMock } from "./brokers-response-mock";

// import * as actions from "../actions/wallet.actions";


export const fetchBrokers = () => {
  // return brokersApi.v10BrokersGet().then(data => ({
  //   brokers: brokersResponseDataMock.brokers
  // }));
  return { brokers: brokersResponseDataMock.brokers };
};

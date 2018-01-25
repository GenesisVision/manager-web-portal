import React from "react";
import { withRouter } from "react-router-dom";

const CreateProgram = ({ match }) => (
  <div>
    Choose broker from the list Choose server from the list Set trading account
    password Input investment program parameters: Reporting period length Date
    start Date end ? Description Success fee Management fee Minimum amount of
    investment Maximum amount of investment Set start balance ( >= $1000 in GVT,
    should have them available on the wallet)
  </div>
);

export default withRouter(CreateProgram);

import { withRouter } from "react-router-dom";
import React from "react";
import Route from "react-router-dom/Route";

import investmentProgramsTabUrls from "../InvestmentProgram.constants";
import CreateProgram from "./CreateProgram/CreateProgram";

const InvestmentProgramsTabs = ({ match }) => (
  <div className="tab-content">
    <div className="tab-pane fade show active">
      <Route
        path={`${match.url}/${investmentProgramsTabUrls.active}`}
        render={() => <div>Active</div>}
      />
    </div>
    <div className="tab-pane fade show active">
      <Route
        path={`${match.url}/${investmentProgramsTabUrls.history}`}
        render={() => <div>History</div>}
      />
    </div>
    <div className="tab-pane fade show active">
      <Route
        path={`${match.url}/${investmentProgramsTabUrls.new}`}
        component={CreateProgram}
      />
    </div>
  </div>
);

export default withRouter(InvestmentProgramsTabs);

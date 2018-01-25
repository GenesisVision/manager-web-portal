import { Switch, Redirect } from "react-router-dom";
import React from "react";
import Route from "react-router/Route";

import InvestmentPrograms from "./InvestmentPrograms";
import routes from "../../../utils/constants/routes";

const InvestmentProgramsRoutes = () => (
  <Switch>
    <Redirect
      exact
      from={routes.investmentPrograms}
      to={`${routes.investmentPrograms}/active`}
    />
    <Route
      path={`${routes.investmentPrograms}`}
      component={InvestmentPrograms}
    />
  </Switch>
);

export default InvestmentProgramsRoutes;

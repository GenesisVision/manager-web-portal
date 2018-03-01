import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";

import ProgramCreateContainer from "./components/program-create-container/program-create-container";

import { PROGRAMS_ROUTE, PROGRAM_CREATE_ROUTE } from "./programs.constants";

const ProgramsRoutes = () => (
  <Switch>
    <Route
      exact
      path={PROGRAMS_ROUTE}
      render={() => <Redirect to={PROGRAM_CREATE_ROUTE} />}
    />
    <Route path={PROGRAM_CREATE_ROUTE} component={ProgramCreateContainer} />
  </Switch>
);

export default ProgramsRoutes;

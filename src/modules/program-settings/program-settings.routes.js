import { Switch, Route } from "react-router-dom";
import React from "react";

import ProgramSettingsCreateContainer from "./components/program-settings-create-container/program-settings-create-container";

import {
  PROGRAM_SETTINGS_CREATE_ROUTE,
  PROGRAM_SETTINGS_EDIT_ROUTE
} from "./program-settings.constants";

const ProgramsSettingsRoutes = () => (
  <Switch>
    <Route
      path={PROGRAM_SETTINGS_EDIT_ROUTE}
      component={ProgramSettingsCreateContainer}
    />
    <Route
      path={PROGRAM_SETTINGS_CREATE_ROUTE}
      component={ProgramSettingsCreateContainer}
    />
  </Switch>
);

export default ProgramsSettingsRoutes;

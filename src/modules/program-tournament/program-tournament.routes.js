import React from "react";
import { Route } from "react-router-dom";
import {
  PROGRAM_SETTINGS_CREATE_TOURNAMENT_ROUTE,
  PROGRAM_SETTINGS_EDIT_TOURNAMENT_ROUTE
} from "./program-tournament.constants";

import Create from "./components/program-tournament-create-container/program-tournament-create-container";

export const ProgramSettingsCreateTournamentRoutes = () => (
  <Route path={PROGRAM_SETTINGS_CREATE_TOURNAMENT_ROUTE} component={Create} />
);

export const ProgramSettingsEditTournamentRoutes = () => (
  <Route
    path={PROGRAM_SETTINGS_EDIT_TOURNAMENT_ROUTE}
    component={() => <h1>edit</h1>}
  />
);

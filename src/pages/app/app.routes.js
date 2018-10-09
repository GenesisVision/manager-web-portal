import { CREATE_PROGRAM_PAGE_ROUTE } from "pages/create-program/create-program.constants";
import createProgramPage from "pages/create-program/create-program.page";
import { DASHBOARD_ROUTE } from "pages/dashboard/dashboard.routes";
import DashboardRoutes from "pages/dashboard/dashboard.routes";
import NotFoundPage from "pages/not-found/not-found.routes";
import PrivateRoute from "pages/private-route";
import { PROFILE_ROUTE } from "pages/profile/profile.constants";
import ProfileRoutes from "pages/profile/profile.routes";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AppLayout from "./components/app-layout/app-layout";

export const HOME_ROUTE = "/";

const AppRoutes = () => {
  return (
    <AppLayout>
      <Switch>
        <Redirect exact from={HOME_ROUTE} to={DASHBOARD_ROUTE} />
        <Route path={PROFILE_ROUTE} component={ProfileRoutes} />
        <PrivateRoute path={DASHBOARD_ROUTE} component={DashboardRoutes} />
        <PrivateRoute
          path={CREATE_PROGRAM_PAGE_ROUTE}
          component={createProgramPage}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </AppLayout>
  );
};

export default AppRoutes;

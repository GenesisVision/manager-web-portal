import { CREATE_PROGRAM_PAGE_ROUTE } from "pages/create-program/create-program.constants";
import createProgramPage from "pages/create-program/create-program.page";
import { DASHBOARD_ROUTE } from "pages/dashboard/dashboard.routes";
import DashboardRoutes from "pages/dashboard/dashboard.routes";
import NotFoundPage from "pages/not-found/not-found.routes";
import PrivateRoute from "pages/private-route";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AppLayout from "./components/app-layout/app-layout";

export const HOME_ROUTE = "/";

const AppRoutes = () => {
  return (
    <AppLayout>
      <Switch>
        <Redirect exact from={HOME_ROUTE} to={DASHBOARD_ROUTE} />
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

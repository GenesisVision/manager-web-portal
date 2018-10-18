import { CREATE_PROGRAM_PAGE_ROUTE } from "pages/create-program/create-program.constants";
import { CREATE_FUND_PAGE_ROUTE } from "pages/create-fund/create-fund.constants";
import createProgramPage from "pages/create-program/create-program.page";
import createFundPage from "pages/create-fund/create-fund.page";
import { DASHBOARD_ROUTE } from "pages/dashboard/dashboard.routes";
import DashboardRoutes from "pages/dashboard/dashboard.routes";
import NotFoundPage from "pages/not-found/not-found.routes";
import PrivateRoute from "pages/private-route";
import { PROFILE_ROUTE } from "pages/profile/profile.constants";
import ProfileRoutes from "pages/profile/profile.routes";
import WalletWithdrawConfirmPage, {
  WALLET_WITHDRAW_CONFIRM_ROUTE
} from "pages/wallet-withdraw-confirm/wallet-withdraw-confirm.page";
import WalletPage, { WALLET_PAGE_ROUTE } from "pages/wallet/wallet-page";
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
        <Route
          path={WALLET_WITHDRAW_CONFIRM_ROUTE}
          component={WalletWithdrawConfirmPage}
        />
        <PrivateRoute path={DASHBOARD_ROUTE} component={DashboardRoutes} />
        <PrivateRoute
          path={CREATE_PROGRAM_PAGE_ROUTE}
          component={createProgramPage}
        />
        <PrivateRoute
          path={CREATE_FUND_PAGE_ROUTE}
          component={createFundPage}
        />
        <PrivateRoute path={WALLET_PAGE_ROUTE} component={WalletPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </AppLayout>
  );
};

export default AppRoutes;

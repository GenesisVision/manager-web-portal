import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";

import NotFoundPage from "../shared/components/not-found/not-found";
import PrivateRoute from "../shared/components/private-route/private-route";

import { DASHBOARD_ROUTE } from "../modules/dashboard/dashboard.constants";
import { EMAIL_CONFIRM_ROUTE } from "../modules/email-confirm/email-confirm.constants";
import { HOME_ROUTE } from "./app.constants";
import { LOGIN_ROUTE } from "../modules/login/login.constants";
import { PROFILE_ROUTE } from "../modules/profile/profile.constants";

import {
  PROGRAM_SETTINGS_CREATE_ROUTE,
  PROGRAM_SETTINGS_EDIT_ROUTE
} from "../modules/program-settings/program-settings.constants";
import { REGISTER_ROUTE } from "../modules/register/register.constants";
import { TRADER_ROUTE } from "../modules/trader/trader.constants";
import { TRADERS_ROUTE } from "../modules/traders/traders.constants";
import { WALLET_ROUTE } from "../modules/wallet/wallet.constants";

import {
  FORGOT_PASSWORD_ROUTE,
  RESET_PASSWORD_ROUTE
} from "../modules/password-reset/password-reset.constants";
import {
  ForgotPasswordRoutes,
  ResetPasswordRoutes
} from "../modules/password-reset/password-reset.routes";
import DashboardRoutes from "../modules/dashboard/dashboard.routes";
import EmailConfirmRoutes from "../modules/email-confirm/email-confirm.routes";
import LoginRoutes from "../modules/login/login.routes";
import ProfileRoutes from "../modules/profile/profile.routes";
import RegisterRoutes from "../modules/register/register.routes";
import TraderRoutes from "../modules/trader/trader.routes";
import TradersRoutes from "../modules/traders/traders.routes";
import WalletRoutes from "../modules/wallet/wallet.routes";
import {
  ProgramSettingsCreateRoutes,
  ProgramSettingsEditRoutes
} from "../modules/program-settings/program-settings.routes";

const AppRoutes = () => (
  <Switch>
    <Route path={EMAIL_CONFIRM_ROUTE} component={EmailConfirmRoutes} />
    <Route path={FORGOT_PASSWORD_ROUTE} component={ForgotPasswordRoutes} />
    <Route path={RESET_PASSWORD_ROUTE} component={ResetPasswordRoutes} />
    <Route path={LOGIN_ROUTE} component={LoginRoutes} />
    <Route path={REGISTER_ROUTE} component={RegisterRoutes} />
    <PrivateRoute
      path={PROGRAM_SETTINGS_CREATE_ROUTE}
      component={ProgramSettingsCreateRoutes}
    />
    <PrivateRoute
      path={PROGRAM_SETTINGS_EDIT_ROUTE}
      component={ProgramSettingsEditRoutes}
    />
    <Route exact path={TRADER_ROUTE} component={TraderRoutes} />
    <Route exact path={TRADERS_ROUTE} component={TradersRoutes} />
    <PrivateRoute path={PROFILE_ROUTE} component={ProfileRoutes} />
    <PrivateRoute path={DASHBOARD_ROUTE} component={DashboardRoutes} />
    <PrivateRoute path={WALLET_ROUTE} component={WalletRoutes} />
    <Route
      exact
      path={HOME_ROUTE}
      render={() => <Redirect to={TRADERS_ROUTE} />}
    />
    <Route component={NotFoundPage} />
  </Switch>
);

export default AppRoutes;

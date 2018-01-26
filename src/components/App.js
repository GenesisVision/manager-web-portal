import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";

import AlertMessageList from "./common/AlertMessageList/AlertMessageList";
import ConfirmEmail from "./scene/ConfirmEmail/ConfirmEmail";
import GvtWalletContainer from "./scene/GvtWalletContainer/GvtWalletContainer";
import Header from "./layout/Header/Header";
import history from "../utils/history";
import LoginScene from "./scene/LoginScene/index";
import NotFoundPage from "./scene/NotFoundPage/NotFoundPage";
import PrivateRoute from "./common/PrivateRoute";
import RegisterScene from "./scene/RegisterScene/RegisterScene";
import routes from "../utils/constants/routes";
import store from "../store";

import InvestmentProgramsRoutes from "./scene/InvestmentPrograms/InvestmentPrograms.routes";
import ProfileSceneRoutes from "./scene/ProfileScene/ProfileScene.routes";

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/:rest" component={Header} />
        <div className="col-sm-2 offset-10 fixed-bottom">
          <AlertMessageList />
        </div>
        <main className="container">
          <Switch>
            <Route path={routes.login} component={LoginScene} />
            <Route path={routes.signup} component={RegisterScene} />
            <PrivateRoute
              path={routes.profile}
              component={ProfileSceneRoutes}
            />
            <PrivateRoute
              path={routes.investmentPrograms}
              component={InvestmentProgramsRoutes}
            />
            <PrivateRoute path={routes.confirmEmail} component={ConfirmEmail} />

            <PrivateRoute
              path={routes.gvtWallet}
              component={GvtWalletContainer}
            />
            <Route
              exact
              path={routes.index}
              render={() => <Redirect to={routes.profile} />}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;

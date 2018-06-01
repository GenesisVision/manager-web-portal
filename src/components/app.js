import { connect } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import React, { Component } from "react";

import AlertMessageList from "../shared/modules/alert-message/components/alert-message-list/alert-message-list";
import Header from "./header/header";
import history from "../utils/history";
import platformActions from "../actions/platform-action";
import PopupContainer from "../modules/popup/components/popup-container";
import Sidebar from "./sidebar/sidebar";
import store from "../store/index";

import "./app.css";
import AppRoutes from "./app.routes";

class App extends Component {
  componentDidMount() {
    const { fetchPlatformSettings } = this.props;
    fetchPlatformSettings();
  }

  render() {
    return (
      <div>
        <Route component={Header} />
        <div className="app__main">
          <div className="app__sidebar">
            <Sidebar />
          </div>
          <div className="app__body">
            <AppRoutes />
          </div>
        </div>
        <AlertMessageList />
        <PopupContainer />
      </div>
    );
  }
}

const ConnectedApp = connect(
  null,
  dispatch => ({
    fetchPlatformSettings: () => dispatch(platformActions.fetchPlatformSettings)
  }),
  null,
  {
    pure: false
  }
)(App);

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConnectedApp />
    </ConnectedRouter>
  </Provider>
);

export default Root;

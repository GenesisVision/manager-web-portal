import "./create-program.page.scss";

import Surface from "components/surface/surface";
import { GVTab, GVTabs } from "gv-react-components";
import React, { Component } from "react";
import { translate } from "react-i18next";

import CreateProgramBroker from "./components/create-program-broker/create-program-broker";

class CreateProgramContainer extends Component {
  state = {
    tab: "broker"
  };

  handleBackFromSettings = () => {
    if (window.confirm("data will be deleted")) {
      this.setState({ tab: "broker" });
    }
  };

  handleGoToSettings = () => {
    this.setState({ tab: "settings" });
  };

  render() {
    const { tab } = this.state;
    const { handleGoToSettings } = this;
    return (
      <Surface className="program-details-history">
        <div className="program-details-history__header">
          <h2>History</h2>
          <GVTabs value={tab}>
            <GVTab value={"broker"} label="Select broker" />
            <GVTab value={"settings"} label="Settings" />
          </GVTabs>
        </div>
        <div>
          {tab === "trades" && (
            <CreateProgramBroker
              handleGoToSettings={handleGoToSettings}
              brokers={[1, 2]}
            />
          )}
          {tab === "events" && "Events"}
        </div>
      </Surface>
    );
  }
}

export default translate()(CreateProgramContainer);

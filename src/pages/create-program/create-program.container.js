import { GVTab, GVTabs } from "gv-react-components";
import React, { Component } from "react";
import { translate } from "react-i18next";

import CreateProgramBroker from "./components/create-program-broker/create-program-broker";
import CreateProgramSettings from "./components/create-program-settings/create-program-settings";
import * as service from "./services/create-program.service";

class CreateProgramContainer extends Component {
  state = {
    tab: "broker",
    choosedBroker: null,
    brokers: null,
    isPending: true
  };

  componentDidMount() {
    // service.fetchBrokers().then(data => {
    //   this.setState({ brokers: data.brokers });
    // });
    const data = service.fetchBrokers();
    this.setState({
      brokers: data.brokers,
      isPending: false,
      choosedBroker: data.brokers[0]
    });
  }

  chooseBroker = broker => {
    this.setState({ choosedBroker: broker });
  };

  navigateToBroker = () => {
    if (window.confirm("data will be deleted")) {
      this.setState({ tab: "broker" });
    }
  };

  navigateToSettings = () => {
    this.setState({ tab: "settings" });
  };

  render() {
    const { tab, choosedBroker, isPending, brokers } = this.state;
    const { navigateToSettings, navigateToBroker, chooseBroker } = this;
    return (
      <div className="create-program-container">
        <GVTabs value={tab}>
          <GVTab value={"broker"} label="Select broker" />
          <GVTab value={"settings"} label="Settings" />
        </GVTabs>
        {!isPending && (
          <div>
            {tab === "broker" && (
              <CreateProgramBroker
                navigateToSettings={navigateToSettings}
                brokers={brokers}
                choosedBroker={choosedBroker}
                chooseBroker={chooseBroker}
              />
            )}
            {tab === "settings" && (
              <CreateProgramSettings navigateToBroker={navigateToBroker} />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default translate()(CreateProgramContainer);

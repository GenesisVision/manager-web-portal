import { GVTab, GVTabs } from "gv-react-components";
import React, { Component } from "react";
import { translate } from "react-i18next";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";

import CreateProgramBroker from "./components/create-program-broker/create-program-broker";
import CreateProgramSettings from "./components/create-program-settings/create-program-settings";
import * as service from "./services/create-program.service";

class CreateProgramContainer extends Component {
  state = {
    tab: "settings",
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

  handleSubmit = (values, setSubmitting) => {
    const { service } = this.props;
    const tradingServerId = this.state.choosedBroker.servers[0].id;

    service.createProgram({ ...values, tradingServerId }, setSubmitting);
  };

  render() {
    const { tab, choosedBroker, isPending, brokers } = this.state;
    const {
      navigateToSettings,
      navigateToBroker,
      chooseBroker,
      handleSubmit
    } = this;
    const { headerData, service } = this.props;
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
            {/* {tab === "settings" &&
              headerData && (
                <CreateProgramSettings
                  navigateToBroker={navigateToBroker}
                  broker={choosedBroker}
                  balance={headerData.totalBalanceGvt}
                  updateBalance={fetchProfileHeaderInfo}
                  onSubmit={handleSubmit}
                  author={headerData && headerData.name}
                />
              )} */}
            {tab === "settings" &&
              true && (
                <CreateProgramSettings
                  navigateToBroker={navigateToBroker}
                  broker={choosedBroker}
                  balance={121}
                  updateBalance={service.fetchBalance}
                  onSubmit={handleSubmit}
                  author={headerData && headerData.name}
                />
              )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  headerData: state.profileHeader.info.data
});

const mapDispatchToProps = dispatch => {
  return {
    service: bindActionCreators(service, dispatch)
  };
};

export default compose(
  translate(),
  connect(mapStateToProps, mapDispatchToProps)
)(CreateProgramContainer);

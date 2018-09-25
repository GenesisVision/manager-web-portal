import Dialog from "components/dialog/dialog";
import { GVButton, GVTab, GVTabs } from "gv-react-components";
import React, { Component } from "react";
import { translate } from "react-i18next";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";

import CreateProgramBroker from "./components/create-program-broker/create-program-broker";
import CreateProgramNavigationDialog from "./components/create-program-navigation-dialog/create-program-navigation-dialog";
import CreateProgramSettings from "./components/create-program-settings/create-program-settings";
import * as createProgramService from "./services/create-program.service";

class CreateProgramContainer extends Component {
  state = {
    tab: "settings",
    choosedBroker: null,
    brokers: null,
    isPending: true,
    isNavigationDialogVisible: false
  };

  componentDidMount() {
    // service.fetchBrokers().then(data => {
    //   this.setState({ brokers: data.brokers });
    // });
    const data = createProgramService.fetchBrokers();
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
    this.setState({ tab: "broker", isNavigationDialogVisible: false });
  };

  navigateToSettings = () => {
    this.setState({ tab: "settings" });
  };

  handleSubmit = (values, setSubmitting) => {
    const tradingServerId = this.state.choosedBroker.servers[0].id;

    createProgramService.createProgram({ ...values }, setSubmitting);
  };

  render() {
    const {
      tab,
      choosedBroker,
      isPending,
      brokers,
      isNavigationDialogVisible
    } = this.state;
    const {
      navigateToSettings,
      navigateToBroker,
      chooseBroker,
      handleSubmit
    } = this;
    const { t, headerData, service } = this.props;
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
                  navigateBack={() => {
                    this.setState({ isNavigationDialogVisible: true });
                  }}
                  broker={choosedBroker}
                  balance={121}
                  updateBalance={service.fetchBalance}
                  onSubmit={handleSubmit}
                  author={headerData && headerData.name}
                />
              )}
            <CreateProgramNavigationDialog
              open={isNavigationDialogVisible}
              onClose={() =>
                this.setState({ isNavigationDialogVisible: false })
              }
              onConfirm={navigateToBroker}
            />
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
    service: bindActionCreators(createProgramService, dispatch)
  };
};

export default compose(
  translate(),
  connect(mapStateToProps, mapDispatchToProps)
)(CreateProgramContainer);

import { GVTab, GVTabs } from "gv-react-components";
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
    tab: "broker",
    choosedBroker: null,
    brokers: null,
    isPending: true,
    isNavigationDialogVisible: false
  };

  componentDidMount() {
    createProgramService.fetchBrokers().then(response => {
      this.setState({
        brokers: response.data.brokers,
        isPending: false,
        choosedBroker: response.data.brokers[0]
      });
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
    const brokerAccountTypeId = this.state.choosedBroker.accountTypes.find(
      type => type.type === values.accountType
    ).id;

    this.props.service.createProgram(
      { ...values, brokerAccountTypeId },
      setSubmitting
    );
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
          <GVTab
            value={"broker"}
            label={t("create-program-page.tabs.select-broker")}
          />
          <GVTab
            value={"settings"}
            label={t("create-program-page.tabs.settings")}
          />
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
              <CreateProgramSettings
                navigateBack={() => {
                  this.setState({ isNavigationDialogVisible: true });
                }}
                broker={choosedBroker}
                balance={headerData.totalBalanceGvt}
                updateBalance={service.fetchBalance}
                onSubmit={handleSubmit}
                author={headerData.name}
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

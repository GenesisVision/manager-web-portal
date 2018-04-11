import { connect } from "react-redux";
import React, { Component } from "react";

import popupActions from "../../../../popup/actions/popup-actions";
import ProgramList from "./program-list/program-list";
import programsService from "../../../service/programs-service";

import { TRADER_DEPOSIT_POPUP } from "../../../../popup/actions/popup-actions.constants";

class ProgramListContainer extends Component {
  componentWillMount() {
    const { getPrograms } = this.props;
    getPrograms();
  }

  render() {
    const { isPending, traders, isAuthenticated, openInvestPopup } = this.props;
    if (isPending || !traders) return null;
    return (
      <ProgramList
        traders={traders.investmentPrograms}
        isAuthenticated={isAuthenticated}
        openInvestPopup={openInvestPopup}
      />
    );
  }
}

const mapStateToProps = state => {
  const { isAuthenticated } = state.authData;
  const { isPending, data } = state.programsData.programs.items;
  return { isPending, traders: data, isAuthenticated };
};

const mapDispatchToProps = dispatch => ({
  getPrograms: () => {
    dispatch(programsService.getPrograms());
  },
  dispatch
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch, ...otherDispatchProps } = dispatchProps;
  const closeInvestPopup = () => {
    return programsService.updateAfterInvestment();
  };
  return {
    ...stateProps,
    ...otherDispatchProps,
    ...ownProps,
    openInvestPopup: programId => () => {
      dispatch(
        popupActions.openPopup(
          TRADER_DEPOSIT_POPUP,
          {
            programId
          },
          closeInvestPopup
        )
      );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  ProgramListContainer
);

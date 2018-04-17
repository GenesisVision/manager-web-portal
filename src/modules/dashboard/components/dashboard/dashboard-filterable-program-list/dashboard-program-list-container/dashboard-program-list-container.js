import { connect } from "react-redux";
import React, { PureComponent } from "react";

import dashboardActions from "../../../../actions/dashboard-actions";
import DashboardProgramList from "./dashboard-program-list/dashboard-program-list";
import popupActions from "../../../../../popup/actions/popup-actions";

import {
  PROGRAM_DEPOSIT_POPUP,
  PROGRAM_WITHDRAW_POPUP
} from "../../../../../popup/actions/popup-actions.constants";
import dashboardService from "../../../../service/dashboard-service";

class DashboardProgramListContainer extends PureComponent {
  componentWillMount() {
    this.props.fetchDashboardPrograms();
  }
  render() {
    const {
      isPending,
      programs,
      openInvestPopup,
      openWithdrawPopup,
      openCloseProgramPopup,
      openEditProgramPage
    } = this.props;
    if (isPending || programs === undefined) {
      return null;
    }

    return (
      <DashboardProgramList
        programs={programs}
        openInvestPopup={openInvestPopup}
        openWithdrawPopup={openWithdrawPopup}
        openCloseProgramPopup={openCloseProgramPopup}
        openEditProgramPage={openEditProgramPage}
      />
    );
  }
}

const mapStateToProps = state => {
  const { isPending, errorMessage, data } = state.dashboardData.programs.items;

  let programs;
  if (data) {
    programs = data.investmentPrograms;
  }
  return { isPending, programs, errorMessage };
};

const mapDispatchToProps = dispatch => ({
  fetchDashboardPrograms: () => {
    dispatch(dashboardActions.fetchDashboardPrograms());
  },
  dispatch
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch, ...otherDispatchProps } = dispatchProps;
  const closeInvestPopup = programId => () => {
    return dashboardService.updateAfterInvestment(programId);
  };

  return {
    ...stateProps,
    ...otherDispatchProps,
    ...ownProps,
    openInvestPopup: programId => () => {
      dispatch(
        popupActions.openPopup(
          PROGRAM_DEPOSIT_POPUP,
          {
            programId
          },
          closeInvestPopup(programId)
        )
      );
    },
    openWithdrawPopup: program => {
      const traderWithdraw = {
        id: program.id,
        title: program.title,
        logo: program.logo,
        level: program.level,
        startOfPeriod: program.startOfPeriod,
        periodDuration: program.periodDuration,
        ownBalance: program.ownBalance,
        token: program.token,
        currency: program.currency,
        minAccountBalanceUsd: program.minAccountBalanceUsd,
        minAccountBalance: program.minAccountBalance
      };
      const popupProps = {
        traderWithdraw
      };
      dispatch(
        popupActions.openPopup(
          PROGRAM_WITHDRAW_POPUP,
          popupProps,
          closeInvestPopup(popupProps.traderWithdraw.id)
        )
      );
    },
    openEditProgramPage: programId => () => {
      dashboardService.openEditProgramPage(programId);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  DashboardProgramListContainer
);

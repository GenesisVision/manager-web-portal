import { connect } from "react-redux";
import React, { PureComponent } from "react";

import dashboardActions from "../../../../actions/dashboard-actions";
import DashboardProgramList from "./dashboard-program-list/dashboard-program-list";
import popupActions from "../../../../../popup/actions/popup-actions";
import {
  TRADER_DEPOSIT_POPUP,
  TRADER_WITHDRAW_POPUP
} from "../../../../../popup/actions/popup-actions.constants";
import dashboardService from "../../../../service/dashboardService";

class DashboardProgramListContainer extends PureComponent {
  componentWillMount() {
    this.props.fetchDashboardPrograms();
  }
  render() {
    const {
      isPending,
      programs,
      openInvestPopup,
      openWithdrawPopup
    } = this.props;
    if (isPending || programs === undefined) {
      return null;
    }

    return (
      <DashboardProgramList
        programs={programs}
        openInvestPopup={openInvestPopup}
        openWithdrawPopup={openWithdrawPopup}
      />
    );
  }
}

const mapStateToProps = state => {
  const { isPending, errorMessage, data } = state.dashboardData.programs;

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
  const closeInvestPopup = traderId => () => {
    return dashboardService.updateAfterInvestment(traderId);
  };

  return {
    ...stateProps,
    ...otherDispatchProps,
    ...ownProps,
    openInvestPopup: traderId => () => {
      dispatch(
        popupActions.openPopup(
          TRADER_DEPOSIT_POPUP,
          {
            traderId
          },
          closeInvestPopup(traderId)
        )
      );
    },
    openWithdrawPopup: () => {
      const { traderDetail } = stateProps;
      const traderWithdraw = {
        id: traderDetail.id,
        title: traderDetail.title,
        logo: traderDetail.logo,
        level: traderDetail.level,
        startOfPeriod: traderDetail.startOfPeriod,
        periodDuration: traderDetail.periodDuration,
        investedTokens: traderDetail.investedTokens,
        token: traderDetail.token
      };
      const popupProps = {
        traderWithdraw
      };
      dispatch(
        popupActions.openPopup(
          TRADER_WITHDRAW_POPUP,
          popupProps,
          closeInvestPopup(popupProps.traderWithdraw.id)
        )
      );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  DashboardProgramListContainer
);

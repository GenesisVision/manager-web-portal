import { connect } from "react-redux";
import React, { PureComponent } from "react";

import popupActions from "../../../../popup/actions/popup-actions";
import traderActions from "../../../actions/trader-actions";
import TraderDetail from "./trader-detail/trader-detail";

import {
  TRADER_DEPOSIT_POPUP,
  TRADER_WITHDRAW_POPUP,
  TRADER_CLOSE_POPUP
} from "../../../../popup/actions/popup-actions.constants";
import traderService from "../../../service/trader-service";

class TraderDetailContainer extends PureComponent {
  componentWillMount() {
    this.props.fetchTraderDetail(this.props.traderId);
  }

  componentWillUnmount() {
    this.props.clearTraderDetail();
  }

  render() {
    const {
      isAuthenticated,
      isPending,
      traderDetail,
      openInvestPopup,
      openWithdrawPopup,
      openCloseProgramPopup,
      openEditProgramPage
    } = this.props;
    if (isPending || traderDetail === undefined) {
      return <div>Loading statistic...</div>;
    }

    return (
      <TraderDetail
        trader={traderDetail}
        isAuthenticated={isAuthenticated}
        openInvestPopup={openInvestPopup}
        openWithdrawPopup={openWithdrawPopup}
        openCloseProgramPopup={openCloseProgramPopup}
        openEditProgramPage={openEditProgramPage}
      />
    );
  }
}

const mapStateToProps = state => {
  const { isPending, errorMessage, data } = state.traderData.traderDetail;

  let traderDetail;
  if (data) {
    traderDetail = data.investmentProgram;
  }

  return {
    isPending,
    traderDetail,
    errorMessage
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTraderDetail: traderId => {
    dispatch(traderActions.fetchTrader(traderId));
  },
  clearTraderDetail: () => {
    dispatch(traderActions.clearTrader());
  },
  dispatch
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch, ...otherDispatchProps } = dispatchProps;
  const closeInvestPopup = traderId => () => {
    return traderService.updateAfterInvestment(traderId);
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
        ownBalance: traderDetail.ownBalance,
        token: traderDetail.token,
        currency: traderDetail.currency,
        minAccountBalanceUsd: traderDetail.minAccountBalanceUsd,
        minAccountBalance: traderDetail.minAccountBalance
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
    },
    openCloseProgramPopup: traderId => () => {
      dispatch(
        popupActions.openPopup(
          TRADER_CLOSE_POPUP,
          {
            traderId
          },
          closeInvestPopup(traderId)
        )
      );
    },
    openEditProgramPage: traderId => () => {
      traderService.openEditProgramPage(traderId);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  TraderDetailContainer
);

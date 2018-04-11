import { connect } from "react-redux";
import React, { PureComponent } from "react";

import popupActions from "../../../../popup/actions/popup-actions";
import programActions from "../../../actions/program-actions";
import ProgramDetail from "./program-detail/program-detail";

import {
  TRADER_DEPOSIT_POPUP,
  TRADER_WITHDRAW_POPUP,
  TRADER_CLOSE_POPUP
} from "../../../../popup/actions/popup-actions.constants";
import programService from "../../../service/program-service";

class TraderDetailContainer extends PureComponent {
  componentWillMount() {
    this.props.fetchProgramDetail(this.props.programId);
  }

  render() {
    const {
      isAuthenticated,
      isPending,
      programDetail,
      openInvestPopup,
      openWithdrawPopup,
      openCloseProgramPopup,
      openEditProgramPage
    } = this.props;
    if (isPending || programDetail === undefined) {
      return <div>Loading statistic...</div>;
    }

    return (
      <ProgramDetail
        program={programDetail}
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
  const { isPending, errorMessage, data } = state.programData.programDetail;

  let programDetail;
  if (data) {
    programDetail = data.investmentProgram;
  }

  return {
    isPending,
    programDetail,
    errorMessage
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProgramDetail: programId => {
    dispatch(programActions.fetchProgram(programId));
  },
  dispatch
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch, ...otherDispatchProps } = dispatchProps;
  const closeInvestPopup = programId => () => {
    return programService.updateAfterInvestment(programId);
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
          closeInvestPopup(programId)
        )
      );
    },
    openWithdrawPopup: () => {
      const { programDetail } = stateProps;
      const traderWithdraw = {
        id: programDetail.id,
        title: programDetail.title,
        logo: programDetail.logo,
        level: programDetail.level,
        startOfPeriod: programDetail.startOfPeriod,
        periodDuration: programDetail.periodDuration,
        ownBalance: programDetail.ownBalance,
        token: programDetail.token,
        currency: programDetail.currency,
        minAccountBalanceUsd: programDetail.minAccountBalanceUsd,
        minAccountBalance: programDetail.minAccountBalance
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
    openCloseProgramPopup: programId => () => {
      dispatch(
        popupActions.openPopup(
          TRADER_CLOSE_POPUP,
          {
            programId
          },
          closeInvestPopup(programId)
        )
      );
    },
    openEditProgramPage: programId => () => {
      programService.openEditProgramPage(programId);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  TraderDetailContainer
);

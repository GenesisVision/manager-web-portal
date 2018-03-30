import { connect } from "react-redux";
import React, { PureComponent } from "react";

import traderActions from "../../../../actions/trader-actions";
import TraderRequestList from "./trader-request-list/trader-request-list";

class TraderRequestListContainer extends PureComponent {
  componentWillReceiveProps(nextProps) {
    const {
      isOwnProgram,
      isPending,
      traderRequests,
      errorMessage,
      traderId,
      fetchTraderRequests
    } = nextProps;
    if (isOwnProgram && !isPending && !errorMessage && !traderRequests) {
      fetchTraderRequests(traderId);
    }
  }

  componentWillUnmount() {
    this.props.clearTraderRequests();
  }

  render() {
    const {
      isOwnProgram,
      isPending,
      traderRequests,
      cancelRequest,
      traderId,
      currency
    } = this.props;
    if (!isOwnProgram || isPending || traderRequests === undefined) {
      return null;
    }
    return (
      <TraderRequestList
        requests={traderRequests.requests}
        currency={currency}
        cancelRequest={cancelRequest(traderId)}
      />
    );
  }
}

const mapStateToProps = state => {
  const { isPending, errorMessage, data } = state.traderData.requests.items;
  const { data: traderDetail } = state.traderData.traderDetail;

  let traderRequests, isOwnProgram, currency;
  if (data) {
    traderRequests = data;
  }

  if (traderDetail && traderDetail.investmentProgram) {
    currency = traderDetail.investmentProgram.currency;
    isOwnProgram = traderDetail.investmentProgram.isOwnProgram;
  }

  return {
    isPending,
    traderRequests,
    currency,
    isOwnProgram,
    errorMessage
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTraderRequests: traderId => {
    dispatch(traderActions.fetchTraderRequests(traderId));
  },
  cancelRequest: traderId => requestId => () => {
    dispatch(traderActions.cancelTraderRequest(traderId, requestId));
  },
  clearTraderRequests: () => {
    dispatch(traderActions.clearTraderRequests());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  TraderRequestListContainer
);

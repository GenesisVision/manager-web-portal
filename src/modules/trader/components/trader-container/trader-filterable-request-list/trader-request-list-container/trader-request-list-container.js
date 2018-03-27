import { connect } from "react-redux";
import React, { PureComponent } from "react";

import traderActions from "../../../../actions/trader-actions";
import TraderRequestList from "./trader-request-list/trader-request-list";

class TraderRequestListContainer extends PureComponent {
  componentWillMount() {
    if (this.props.isOwnProgram) {
      this.props.fetchTraderRequests(this.props.traderId);
    }
  }

  render() {
    const {
      isOwnProgram,
      isPending,
      traderRequests,
      cancelRequest,
      traderId,
      token
    } = this.props;
    if (!isOwnProgram || isPending || traderRequests === undefined) {
      return null;
    }
    return (
      <TraderRequestList
        requests={traderRequests.requests}
        token={token}
        cancelRequest={cancelRequest(traderId)}
      />
    );
  }
}

const mapStateToProps = state => {
  const { isPending, errorMessage, data } = state.traderData.requests.items;
  const { data: traderDetail } = state.traderData.traderDetail;

  let traderRequests,
    isOwnProgram,
    token = {};
  if (data) {
    traderRequests = data;
  }

  if (traderDetail && traderDetail.investmentProgram) {
    token = traderDetail.investmentProgram.token;
    isOwnProgram = traderDetail.investmentProgram.token;
  }

  return {
    isPending,
    traderRequests,
    token,
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  TraderRequestListContainer
);

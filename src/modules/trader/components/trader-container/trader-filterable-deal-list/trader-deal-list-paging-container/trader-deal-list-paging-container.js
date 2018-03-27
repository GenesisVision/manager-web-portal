import { connect } from "react-redux";
import React from "react";

import PagingContainer from "../../../../../paging/components/paging/paging";
import traderActions from "../../../../actions/trader-actions";

const TraderDealListPagingContainer = ({
  paging,
  updatePaging,
  updatePagingAndFetch
}) => (
  <PagingContainer
    paging={paging}
    updatePaging={updatePaging}
    updatePagingAndFetch={updatePagingAndFetch}
  />
);

const mapStateToProps = state => {
  const { paging } = state.traderData.deals;
  return { paging };
};

const mapDispatchToProps = dispatch => ({
  dispatch
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { traderId } = ownProps;
  return {
    ...stateProps,
    updatePaging: paging => {
      dispatch(traderActions.updateTraderDealListPaging(traderId, paging));
    },
    updatePagingAndFetch: paging => {
      dispatch(
        traderActions.updateTraderDealListPagingAndFetch(traderId, paging)
      );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  TraderDealListPagingContainer
);

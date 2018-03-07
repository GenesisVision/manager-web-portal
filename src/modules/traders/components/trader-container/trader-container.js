import { connect } from "react-redux";
import React, { Component } from "react";

import Trader from "./trader/trader";
import tradersActions from "../../actions/traders-actions";
import FormError from "../../../../shared/components/form/form-error/form-error";

class TraderContainer extends Component {
  componentWillMount() {
    const { traderId } = this.props.match.params;
    this.props.fetchTrader(traderId);
  }
  render() {
    const { isPending, errorMessage, trader, closeTraderProgram } = this.props;

    if (isPending || trader === undefined) {
      return null;
    }

    return (
      <div>
        <Trader
          trader={trader.investmentProgram}
          closeTraderProgram={closeTraderProgram}
        />
        <FormError error={errorMessage} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    isPending: isPendingTrader,
    errorMessage: errorMessageTrader,
    data
  } = state.traderData.trader;

  const {
    isPending: isPendingCloseProgram,
    errorMessage: errorMessageCloseProgram
  } = state.traderData.trader;

  let trader;
  if (data) {
    trader = data;
  }

  return {
    isPending: isPendingTrader || isPendingCloseProgram,
    trader,
    errorMessage: errorMessageTrader || errorMessageCloseProgram
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTrader: traderId => {
    dispatch(tradersActions.fetchTrader(traderId));
  },
  closeTraderProgram: traderId => () => {
    dispatch(tradersActions.closeTraderProgram(traderId)).then(() =>
      tradersActions.openTradersPage()
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TraderContainer);

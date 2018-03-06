import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import React from "react";

import traderDepositActions from "../../actions/trader-deposit-actions";
import TraderDepositModal from "./trader-deposit-modal/trader-deposit-modal";
import { TRADER_ROUTE } from "../../../traders/traders.constants";

const TraderDepositContainer = ({
  location,
  match,
  isPending,
  traderDeposit,
  fetchDeposit,
  submitDeposit,
  closeModal
}) => {
  if (isPending) {
    return null;
  }
  if (traderDeposit === undefined) {
    fetchDeposit();
    return null;
  }
  const { from } = location.state || { from: { pathname: TRADER_ROUTE } };
  const handleCloseModal = () => {
    closeModal(from);
  };
  const handleDepositSubmit = ({ amount }, setSubmitting) => {
    submitDeposit(traderDeposit.id, amount, from, setSubmitting);
  };

  return (
    <div>
      <TraderDepositModal
        isOpen={true}
        traderDeposit={traderDeposit}
        onSubmit={handleDepositSubmit}
        closeModal={handleCloseModal}
      />
    </div>
  );
};

const mapStateToProps = state => {
  const { isPending, errorMessage, data } = state.traderDepositData;

  let traderDeposit;
  if (data) {
    traderDeposit = data;
  }
  if (errorMessage !== "") {
    traderDeposit = {};
  }
  return { isPending, traderDeposit, errorMessage };
};

const mapDispatchToProps = dispatch => ({
  fetchDeposit: traderId => {
    dispatch(traderDepositActions.fetchTraderDeposit(traderId));
  },
  submitDeposit: (traderId, amount, from, setSubmitting) => {
    dispatch(traderDepositActions.submitTraderDeposit(traderId, amount))
      .then(() => traderDepositActions.closeTraderDepositModal(from))
      .catch(() => {
        setSubmitting(false);
      });
  },
  closeModal: from => {
    traderDepositActions.closeTraderDepositModal(from);
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TraderDepositContainer)
);

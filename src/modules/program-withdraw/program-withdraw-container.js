import Dialog from "components/dialog/dialog";
import ProgramWithdrawPopup from "modules/program-withdraw/components/program-withdraw-popup";
import {
  getProgramWithdrawInfo,
  withdrawProgramById,
  getFundWithdrawInfo,
  withdrawFundById
} from "modules/program-withdraw/servives/program-withdraw.services";
import PropTypes from "prop-types";
import React from "react";
import { translate } from "react-i18next";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "redux";
export const WITHDRAW_PROGRAM = "withdraw-program";
export const WITHDRAW_FUND = "withdraw-fund";

const ProgramWithdrawContainer = props => {
  const { open, onClose, currency, services, id, type } = props;
  let fetchMethod, handleMethod;
  switch (type) {
    case WITHDRAW_FUND:
      fetchMethod = services.getFundWithdrawInfo;
      handleMethod = services.withdrawFundById;
      break;
    case WITHDRAW_PROGRAM:
    default:
      fetchMethod = services.getProgramWithdrawInfo;
      handleMethod = services.withdrawProgramById;
  }
  const handleWithdraw = (id, amount) => {
    return handleMethod(id, amount).then(res => {
      onClose();
      return res;
    });
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <ProgramWithdrawPopup
        currency={currency}
        fetchInfo={() => fetchMethod(id)}
        withdraw={amount => handleWithdraw(id, amount)}
      />
    </Dialog>
  );
};

ProgramWithdrawContainer.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  id: PropTypes.string
};

const mapStateToProps = state => ({
  currency: state.accountSettings.currency
});

const mapDispathToProps = dispatch => ({
  services: bindActionCreators(
    {
      getProgramWithdrawInfo,
      withdrawProgramById,
      getFundWithdrawInfo,
      withdrawFundById
    },
    dispatch
  )
});

export default compose(
  translate(),
  connect(mapStateToProps, mapDispathToProps)
)(ProgramWithdrawContainer);

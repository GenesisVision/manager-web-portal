import Dialog from "components/dialog/dialog";
import FundWithdrawPopup from "modules/fund-withdraw/components/fund-withdraw-popup";
import {
  getFundWithdrawInfo,
  alert
} from "modules/fund-withdraw/servives/fund-withdraw.services";
import PropTypes from "prop-types";
import React from "react";
import { translate } from "react-i18next";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "redux";
import authService from "services/auth-service";
import { managerApiProxy } from "services/api-client/manager-api";

const FundWithdrawContainer = props => {
  const { open, onClose, currency, services, id, type } = props;
  const handleWithdraw = (id, percent) => {
    return managerApiProxy
      .v10ManagerFundsByIdWithdrawByPercentPost(
        id,
        percent,
        authService.getAuthArg()
      )
      .then(() => {
        onClose();
        services.alert("success", "fund-withdraw.success-alert-message", true);
      })
      .catch(error => {
        onClose();
        services.alert("error", error.errorMessage || error.message);
      });
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <FundWithdrawPopup
        currency={currency}
        fetchInfo={() => services.getFundWithdrawInfo(id)}
        withdraw={percent => handleWithdraw(id, percent)}
        type={type}
      />
    </Dialog>
  );
};

FundWithdrawContainer.propTypes = {
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
      getFundWithdrawInfo,
      alert
    },
    dispatch
  )
});

export default compose(
  translate(),
  connect(mapStateToProps, mapDispathToProps)
)(FundWithdrawContainer);

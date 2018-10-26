import Dialog from "components/dialog/dialog";
import ProgramWithdrawPopup from "modules/program-withdraw/components/program-withdraw-popup";
import {
  getProgramWithdrawInfo,
  alert
} from "modules/program-withdraw/servives/program-withdraw.services";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import { translate } from "react-i18next";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "redux";
import authService from "services/auth-service";
import { managerApiProxy } from "services/api-client/manager-api";

class ProgramWithdrawContainer extends PureComponent {
  state = { error: "" };

  handleWithdraw = (id, percent) => {
    return managerApiProxy
      .v10ManagerFundsByIdWithdrawByPercentPost(
        id,
        percent,
        authService.getAuthArg()
      )
      .then(() => {
        this.props.onClose();
        this.props.services.alert(
          "success",
          "withdraw-program.success-alert-message",
          true
        );
      })
      .catch(error => {
        this.setState({ error: error.errorMessage || error.error });
      });
  };

  render() {
    const { open, onClose, services, id, programCurrency } = this.props;
    return (
      <Dialog open={open} onClose={onClose}>
        <ProgramWithdrawPopup
          currency={programCurrency}
          fetchInfo={() => services.getProgramWithdrawInfo(id)}
          withdraw={amount => this.handleWithdraw(id, amount)}
          error={this.state.error}
        />
      </Dialog>
    );
  }
}

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
      alert
    },
    dispatch
  )
});

export default compose(
  translate(),
  connect(mapStateToProps, mapDispathToProps)
)(ProgramWithdrawContainer);

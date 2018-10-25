import GeneralNotification from "components/general-notification/general-notification";
import {
  addFundNotificationsService,
  removeFundNotificationService
} from "modules/fund-notifications/services/fund-notifications.services";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { translate } from "react-i18next";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { alertMessageActions } from "shared/modules/alert-message/actions/alert-message-actions";

class FundNotificationsGeneral extends Component {
  success = text => {
    const { dispatch } = this.props;
    dispatch(alertMessageActions.success(text));
  };

  handleAdd = options => {
    const { services, t } = this.props;
    return services
      .addFundNotificationsService(options)
      .then(() =>
        this.success(t(`fund.general.${options.type}.enabled-alert`))
      );
  };

  handleRemove = options => {
    const { services, t } = this.props;
    return services
      .removeFundNotificationService(options)
      .then(() =>
        this.success(t(`fund.general.${options.type}.disabled-alert`))
      );
  };
  render() {
    const { t, settings, fundId } = this.props;
    return (
      <div className="notification-settings">
        <h3>{t("notifications.fund.general.title")}</h3>
        <GeneralNotification
          name="FundNewsAndUpdates"
          label={t("notifications.fund.general.news-updates")}
          fundId={fundId}
          setting={settings.FundNewsAndUpdates}
          addNotification={this.handleAdd}
          removeNotification={this.handleRemove}
        />
        <GeneralNotification
          name="FundEndOfPeriod"
          label={t("notifications.fund.general.end-of-period")}
          fundId={fundId}
          setting={settings.FundEndOfPeriod}
          addNotification={this.handleAdd}
          removeNotification={this.handleRemove}
        />
      </div>
    );
  }
}

FundNotificationsGeneral.propTypes = {
  settings: PropTypes.object,
  services: PropTypes.shape({
    addFundNotificationsService: PropTypes.func,
    removeFundNotificationService: PropTypes.func
  })
};

FundNotificationsGeneral.defaultProps = {
  settings: {}
};

const mapDispatchToProps = dispatch => ({
  services: bindActionCreators(
    {
      addFundNotificationsService,
      removeFundNotificationService
    },
    dispatch
  ),
  dispatch
});

export default compose(
  translate(),
  connect(
    undefined,
    mapDispatchToProps
  )
)(FundNotificationsGeneral);
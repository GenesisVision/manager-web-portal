import { connect } from "react-redux";
import React from "react";

import { alertMessageActions } from "../../../../shared/modules/alert-message/actions/alert-message-actions";
import TraderClose from "./trader-close/trader-close";
import traderCloseActions from "../../actions/trader-close-actions";

const TraderCloseContainer = ({
  traderId,
  errorMessage,
  closeProgram,
  closePopup
}) => {
  const handleCloseProgramSubmit = setSubmitting => {
    closeProgram(setSubmitting);
  };
  return (
    <TraderClose
      error={errorMessage}
      submitPopup={handleCloseProgramSubmit}
      closePopup={closePopup}
    />
  );
};

const mapStateToProps = state => {
  const { errorMessage } = state.traderCloseData;

  return {
    errorMessage
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch, ...otherDispatchProps } = dispatchProps;
  return {
    ...stateProps,
    ...otherDispatchProps,
    ...ownProps,
    closeProgram: () =>
      dispatch(traderCloseActions.traderClose(ownProps.traderId))
        .then(() => ownProps.submitPopup())
        .then(() => {
          dispatch(
            alertMessageActions.success(
              "Request to Close program sent successfully"
            )
          );
          return Promise.resolve();
        })
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  TraderCloseContainer
);

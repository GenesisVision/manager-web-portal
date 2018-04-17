import { connect } from "react-redux";
import React, { PureComponent } from "react";

import NotFoundPage from "../../../../shared/components/not-found/not-found";
import programActions from "../../actions/program-settings-actions";
import ProgramSettingsEditForm from "./program-settings-edit-form/program-settings-edit-form";
import programSettingsService from "../../service/program-settings-service";

class ProgramSettingsEditContainer extends PureComponent {
  componentWillMount() {
    this.props.fetchProgramSettings();
  }
  render() {
    const {
      isPending,
      programSettings,
      errorMessage,
      editProgram
    } = this.props;
    const handleEditProgram = (values, setSubmitting) => {
      editProgram(values, setSubmitting);
      setSubmitting(false);
    };
    if (isPending || programSettings === undefined) {
      return null;
    }

    if (!programSettings.isOwnProgram) {
      return <NotFoundPage />;
    }

    return (
      <div>
        <ProgramSettingsEditForm
          programSettings={programSettings}
          onSubmit={handleEditProgram}
          error={errorMessage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    isPending,
    errorMessage,
    data
  } = state.programSettingsData.programSettings;
  const {
    errorMessage: errorMessageOnSubmit
  } = state.programSettingsData.editSettingsData;

  return {
    isPending,
    errorMessage: errorMessage || errorMessageOnSubmit,
    programSettings: data
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch,
  fetchProgramSettings: programId => {
    dispatch(programActions.fetchProgramSettings(programId));
  },
  editProgram: (data, setSubmitting) => {
    dispatch(programSettingsService.editProgram(data)).catch(() => {
      setSubmitting(false);
    });
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch, ...otherDispatchProps } = dispatchProps;
  const { programId } = ownProps.match.params;
  return {
    ...stateProps,
    ...otherDispatchProps,
    ...ownProps,
    fetchProgramSettings: () => {
      dispatch(programActions.fetchProgramSettings(programId));
    },
    editProgram: (data, setSubmitting) => {
      dispatch(programSettingsService.editProgram(programId, data)).catch(() => {
        setSubmitting(false);
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  ProgramSettingsEditContainer
);
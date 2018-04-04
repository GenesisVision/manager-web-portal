import { connect } from "react-redux";
import React, { PureComponent } from "react";

import programActions from "../../actions/program-settings-actions";
import ProgramSettingsEditForm from "./program-settings-edit-form/program-settings-edit-form";
import programSettingsService from "../../service/program-settings-service";

class ProgramSettingsEditContainer extends PureComponent {
  componentWillMount() {
    //this.props.fetchProgramForm();
  }
  render() {
    const { traderId } = this.props.match.params;
    const { isPending, programForm, errorMessage, editProgram } = this.props;
    const handleEditProgram = (values, setSubmitting) => {
      editProgram(values, setSubmitting);
      setSubmitting(false);
    };
    if (isPending || programForm === undefined) {
      return null;
    }

    return (
      <div>
        <ProgramSettingsEditForm
          programForm={programForm}
          onSubmit={handleEditProgram}
          error={errorMessage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { isPending, errorMessage, data } = state.programFormData.formData;
  const errorMessageOnSubmit = state.programFormData.formSubmit.errorMessage;

  return {
    isPending,
    errorMessage: errorMessage || errorMessageOnSubmit,
    programForm: data
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProgramForm: () => {
    dispatch(programActions.fetchProgramForm());
  },
  editProgram: (data, setSubmitting) => {
    dispatch(programSettingsService.editProgram(data)).catch(() => {
      setSubmitting(false);
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ProgramSettingsEditContainer
);

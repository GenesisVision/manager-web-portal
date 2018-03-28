import { connect } from "react-redux";
import React, { Component } from "react";

import programActions from "../../actions/program-settings-actions";
import ProgramCreateForm from "./program-settings-create-form/program-settings-create-form";
import programSettingsSevice from "../../service/program-settings-service";
import filesService from "../../../../shared/services/file-service";

class ProgramSettingsCreateContainer extends Component {
  componentWillMount() {
    this.props.fetchProgramForm();
  }
  render() {
    const {
      isPending,
      programForm,
      errorMessage,
      createProgram,
      uploadAvatar
    } = this.props;
    const handleCreateProgram = (values, setSubmitting) => {
      createProgram(values, setSubmitting);
      setSubmitting(false);
    };
    if (isPending || programForm === undefined) {
      return null;
    }

    return (
      <div>
        <ProgramCreateForm
          programForm={programForm}
          onSubmit={handleCreateProgram}
          error={errorMessage}
          uploadAvatar={uploadAvatar}
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
  createProgram: (data, setSubmitting) => {
    dispatch(programSettingsSevice.createProgram(data)).catch(() => {
      setSubmitting(false);
    });
  },
  uploadAvatar: file => {
    return filesService.uploadFile(file);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ProgramSettingsCreateContainer
);
import { connect } from "react-redux";
import React, { Component } from "react";

import programActions from "../../actions/program-actions";
import ProgramCreateForm from "./program-create-form/program-create-form";

class ProgramCreateContainer extends Component {
  componentWillMount() {
    this.props.fetchProgramForm();
  }
  render() {
    const { isPending, programForm, errorMessage, createProgram } = this.props;
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
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { isPending, errorMessage, data } = state.programFormData.formData;
  const { errorMessage1 } = state.programFormData.formSubmit;

  return {
    isPending,
    errorMessage,
    programForm: data
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProgramForm: () => {
    dispatch(programActions.fetchProgramForm());
  },
  createProgram: (data, setSubmitting) => {
    dispatch(programActions.submitProgramForm(data)).catch(() => {
      setSubmitting(false);
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ProgramCreateContainer
);

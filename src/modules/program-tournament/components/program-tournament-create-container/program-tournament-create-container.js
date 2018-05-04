import { connect } from "react-redux";
import React, { Component } from "react";

import TournamentProgramForm from "./program-tournament-create-form/program-tournament-create-form";

class TournamentProgramFormContainer extends Component {
  render() {
    const { isPending, errorMessage, createProgram } = this.props;
    const handleCreateProgram = (values, setSubmitting) => {
      createProgram(values, setSubmitting);
    };

    return (
      <TournamentProgramForm
        onSubmit={handleCreateProgram}
        error={errorMessage}
      />
    );
  }
}

const mapStateToProps = state => {
  const { isPending, errorMessage } = state.programTournament.formData;

  return {
    isPending,
    errorMessage
  };
};

const mapDispatchToProps = dispatch => ({
  createProgram: (data, setSubmitting) => {
    console.info(data);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  TournamentProgramFormContainer
);

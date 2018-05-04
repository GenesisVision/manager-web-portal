import { connect } from "react-redux";
import React, { Component } from "react";

import TournamentProgramForm from "./program-tournament-create-form/program-tournament-create-form";
import { createProgram } from "../../service/program-tournament-service";
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
  const { isPending, errorMessage } = state.programTournament.createData;

  return {
    isPending,
    errorMessage
  };
};

export default connect(mapStateToProps, { createProgram })(
  TournamentProgramFormContainer
);
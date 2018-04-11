import { connect } from "react-redux";
import React, { PureComponent } from "react";

import programActions from "../../../actions/program-actions";
import ProgramHistory from "./program-history/program-history";

class TraderHistoryContainer extends PureComponent {
  componentWillMount() {
    this.props.fetchProgramHistory(this.props.programId);
  }

  render() {
    const { isPending, history } = this.props;
    if (isPending || history === undefined) {
      return null;
    }

    return <ProgramHistory data={history} />;
  }
}

const mapStateToProps = state => {
  const { isPending, errorMessage, data } = state.programData.history;
  const { data: programDetail } = state.programData.programDetail;

  let history;
  if (data) {
    history = data.chart;
  }

  if (history && programDetail && programDetail.investmentProgram) {
    history = [
      {
        profit: 0,
        date: programDetail.investmentProgram.programStartDate
      },
      ...history
    ];
  }

  return {
    isPending,
    history,
    errorMessage
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProgramHistory: programId => {
    dispatch(programActions.fetchProgramHistory(programId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  TraderHistoryContainer
);

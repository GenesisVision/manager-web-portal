import React from "react";

import ProgramItem from "./program-item/program-item";

const ProgramList = ({
  programs,
  isAuthenticated,
  openInvestPopup,
  toggleFavoriteProgram
}) => {
  const renderTraderList = () => {
    if (programs.length === 0) return <div>There are no traders</div>;
    return programs.map((x, idx) => (
      <ProgramItem
        key={x.id}
        program={x}
        isAuthenticated={isAuthenticated}
        openInvestPopup={openInvestPopup}
        toggleFavoriteProgram={toggleFavoriteProgram}
      />
    ));
  };
  return renderTraderList();
};

export default ProgramList;

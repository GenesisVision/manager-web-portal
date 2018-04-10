import React from "react";

import ProgramItem from "./program-item/program-item";

const ProgramList = ({ traders, isAuthenticated, openInvestPopup }) => {
  const renderTraderList = () => {
    if (traders.length === 0) return <div>There are no traders</div>;
    return traders.map((x, idx) => (
      <ProgramItem
        key={x.id}
        idx={idx + 1}
        trader={x}
        isAuthenticated={isAuthenticated}
        openInvestPopup={openInvestPopup}
      />
    ));
  };
  return renderTraderList();
};

export default ProgramList;

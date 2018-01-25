import React from "react";

import InvestmentProgramsNav from "./InvestorProgramsNav/InvestorProgramsNav";
import InvestmentProgramsTabs from "./InvestmentProgramsTabs/InvestmentProgramsTabs";

const InvestmentPrograms = () => {
  return (
    <div>
      <InvestmentProgramsNav />
      <br />
      <InvestmentProgramsTabs />
    </div>
  );
};

export default InvestmentPrograms;

import React from "react";
import Total from "./summary-items";
import SummaryItems from "./summary-items";

const Summary = () => {
  return (
    <div className="basis-[50%]">
      <SummaryItems/>
      <Total/>
    </div>
  );
};

export default Summary;

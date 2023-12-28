import React from "react";

const proposalUnit = (props) => {
  return (
    <div
      onClick={() => {
        props.setPieVotes([50, 29]);
        props.setSelected("AquaVote2");
      }}
      className="sm:h-[600px] lg:h-[100px] bg-[#1d1f31] rounded-2xl hover:bg-[#34394d] transition duration-300 ease-in-out cursor-pointer"
    >
      <h1 className="flex flex-row min-h-[600px] sm:min-h-[600px] lg:min-h-[100px] text-center items-center justify-center ">
        Aquari Governance Proposal
      </h1>
    </div>
  );
};

export default proposalUnit;

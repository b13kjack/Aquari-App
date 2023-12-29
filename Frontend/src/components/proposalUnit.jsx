import React from "react";
import { useContext } from "react";
import { ActiveContext } from "../pages/home";

const proposalUnit = (props) => {
  const { activePage } = useContext(ActiveContext);
  const { setActivePage } = useContext(ActiveContext);
  return (
    <div
      onClick={() => {
        setActivePage(props.index);
        props.setSelected("AquaVote2");
      }}
      className="sm:h-[100px] lg:h-[100px] bg-[#1d1f31] rounded-2xl hover:bg-[#34394d] transition duration-300 ease-in-out cursor-pointer"
    >
      <h1 className="flex flex-row min-h-[100px]  text-center items-center justify-center ">
        {`Aquari Governance Proposal # ${props.index}`}
      </h1>
    </div>
  );
};

export default proposalUnit;

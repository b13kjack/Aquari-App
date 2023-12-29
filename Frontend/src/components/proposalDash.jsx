import React from "react";
import { ActiveContext } from "../pages/home";
import { useContext } from "react";
import Nav from "../components/navbar";

//Import Icons
import { BiSolidWallet } from "react-icons/bi";

const big = 2;

const proposalDash = ({
  startVote,
  getProposalFunc,
  getProposalsFunc,
  getVotesOfFunc,
}) => {
  const { activePage } = useContext(ActiveContext);
  console.log(JSON.stringify(activePage, null, 2));
  return (
    <div className="flex sm:w-[925px] xs:w-[925px] md:[925px] lg:w-[925px] w-full min-h-[300px] flex-initial flex-col h-full bg-[#1d1f31] rounded-2xl">
      <h1 className="text-2xl pt-7 pl-4 ml-6 font-semibold tracking-wider">
        {`${getProposalsFunc[activePage][4]}`}
      </h1>
      <p className="text-lg ml-1 pl-11 pt-3 tracking-wider text-[#4e5467]">{`Proposer: ${getProposalsFunc[
        activePage
      ][7].slice(0, 18)}`}</p>
      <div className="w-5/6 border border-b-2 border-[#4e5467] mt-6 ml-[60px]"></div>
      <p className="p-12 pt-8 leading-9 tracking-wide">
        {`${getProposalsFunc[activePage][5]}`}
      </p>
      <div className="flex flex-row gap-8 p-12 mt-[-60px]">
        <div className="w-[170px] h-[55px] bg-[#00b351] rounded-md text-center hover:bg-[#2cc571] transition duration-200 ease-in-out cursor-pointer">
          <button
            onClick={() => {}}
            className="flex flex-row gap-3 items-center ml-3 mt-2 select-none"
          >
            <p className="font-semibold md:flex tracking-wider">Aye</p>
          </button>
        </div>
        <div className="w-[170px] h-[55px] bg-[#7a1212] rounded-md text-center hover:bg-[#7d2121] transition duration-200 ease-in-out cursor-pointer">
          <button
            onClick={() => {}}
            className="flex flex-row gap-3 items-center ml-3 mt-2 select-none"
          >
            <p className="font-semibold md:flex tracking-wider">Nay</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default proposalDash;

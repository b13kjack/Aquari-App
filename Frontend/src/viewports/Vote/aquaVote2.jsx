import React from "react";
import { useState, useEffect } from "react";

//Import Icons
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

//Import Components
import Widget from "../../components/swapWidget";
import ProposalDash from "../../components/proposalDash";
import ProposalChart from "../../components/proposalChart";
import VotedDisplay from "../../components/votedDisplay";

const aquaVote = (props) => {
  return (
    <div className="bg-[#191b2c] lg:h-full xl:h-full rounded-2xl rounded-b-none rounded-r-none p-10 overflow-x-hidden">
      <div className="flex flex-col gap-x-8 gap-y-8">
        <h1 className="text-lg font-semibold cursor-pointer select-none tracking-wide">
          {"< Back to Proposal Select"}
        </h1>
        <h1 className="text-3xl font-semibold tracking-wider">
          Aquari Governance Proposal #2
        </h1>
        <div className="flex flex-col xl:flex-row gap-y-8 xl:gap-x-8">
          <ProposalDash
            getProposalFunc={props.getProposalFunc}
            getProposalsFunc={props.getProposalsFunc}
            getVotesOfFunc={props.getVotesOfFunc}
          />
          <ProposalChart pieVotes={props.pieVotez} />
        </div>
        <h1 className="text-3xl font-semibold mt-16 tracking-wider">
          Casted DAO Ballots
        </h1>
        <VotedDisplay />
      </div>

      {/* Social Media Icons */}
      <div className="flex flex-row absolute bottom-0 right-0 gap-3 p-5 border-[#4e5467] hide-on-height hide-on-width">
        <div className="bg-[#232734] hover:bg-[#34394d] p-[9px] rounded-md transition duration-300 ease-in-out cursor-pointer">
          <BsTwitterX className="cursor-pointer" size="24" color="white" />
        </div>

        <div className=" bg-[#232734] hover:bg-[#34394d] p-[9px] rounded-md transition duration-300 ease-in-out cursor-pointer">
          <BsInstagram className="cursor-pointer" size="24" color="white" />
        </div>

        <div className=" bg-[#232734] hover:bg-[#34394d] p-[9px] rounded-md transition duration-300 ease-in-out cursor-pointer">
          <BsFacebook className="cursor-pointer" size="24" color="white" />
        </div>

        <div className=" bg-[#232734] hover:bg-[#34394d] p-[9px] rounded-md transition duration-300 ease-in-out cursor-pointer">
          <BsLinkedin className="cursor-pointer" size="24" color="white" />
        </div>

        <div className=" bg-[#232734] hover:bg-[#34394d] p-[9px] rounded-md transition duration-300 ease-in-out cursor-pointer">
          <FaTelegramPlane className="cursor-pointer" size="24" color="white" />
        </div>
      </div>
    </div>
  );
};

export default aquaVote;

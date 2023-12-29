import React from "react";
import { ActiveContext } from "../../pages/home";

//Import Icons
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useContext } from "react";

//Import Components
import ProposalUnit from "../../components/proposalUnit";

const aquaVote = ({ lolz, getProposalsFunc, selected, setSelected, jsx }) => {
  const active = useContext(ActiveContext);
  return (
    <div className="bg-[#191b2c] h-full lg:h-full xl:h-full rounded-2xl rounded-b-none rounded-r-none p-10">
      <div className="flex flex-col gap-x-8 gap-y-8">
        <h1 className="text-3xl font-semibold">Select a Proposal</h1>
        {getProposalsFunc.map((item, index) => {
          return (
            <ProposalUnit
              index={index}
              selected={selected}
              setSelected={setSelected}
              jsx={jsx}
            />
          );
        })}
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

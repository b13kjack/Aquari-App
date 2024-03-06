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
import { useState, useEffect } from "react";

//Import Components
import ProposalUnit from "../../components/proposalUnit";

//Global Vars
let returnedBlockTimestamp;
const rpcUrl = "https://bsc-dataseed.binance.org/";
let timestamp;

function fetchBlockDetails(blockNumber) {
  fetch(rpcUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getBlockByNumber",
      params: [blockNumber, false], // false indicates that we do not need transaction details
      id: 1,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const blockDetails = data.result;
      const timestampHex = blockDetails.timestamp;
      timestamp = parseInt(timestampHex, 16);
      console.log("Block Timestamp:", new Date(timestamp * 1000).toISOString());
      console.log("Current Block TimeStamp", timestamp);
    })
    .catch((error) => console.error("Error:", error));

  return timestamp;
}

const aquaVote = ({ lolz, getProposalsFunc, selected, setSelected, jsx }) => {
  useEffect(() => {
    console.log("Timestamp from Array Object", getProposalsFunc[2][1]);
    fetch(rpcUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "eth_blockNumber",
        params: [],
        id: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const blockNumber = data.result;
        returnedBlockTimestamp = fetchBlockDetails(blockNumber);
      })
      .catch((error) => console.error("Error:", error));
  }, [1]);
  const active = useContext(ActiveContext);
  return (
    <div className="bg-[#000000] bg-opacity-40 h-full lg:h-full xl:h-full rounded-2xl rounded-b-none overflow-y-auto rounded-r-none p-10">
      <div className="flex flex-col gap-x-8 gap-y-8">
        <h1 className="text-3xl font-semibold">Select a Proposal</h1>
        {getProposalsFunc.map((item, index) => {
          return (
            <ProposalUnit
              key={getProposalsFunc.length - 1 - index}
              index={getProposalsFunc.length - 1 - index}
              selected={selected}
              setSelected={setSelected}
              jsx={jsx}
            />
          );
        })}
        {/* <h1 className="text-3xl font-semibold text-red-600">Expired Proposals</h1>
        {getProposalsFunc.map((item, index) => {
          return timestamp < returnedBlockTimestamp ? (
            <ProposalUnit
              key={getProposalsFunc.length - 1 - index}
              index={getProposalsFunc.length - 1 - index}
              selected={selected}
              setSelected={setSelected}
              jsx={jsx}
            />
          ) : null;
        })} */}
      </div>

      {/* Social Media Icons */}
      <div className="flex flex-row absolute bottom-0 right-0 gap-3 p-5 border-[#4e5467] hide-on-height hide-on-width">
        <div className="bg-[#232734] hover:bg-[#34394d] p-[9px] rounded-md transition duration-300 ease-in-out cursor-pointer">
          <BsTwitterX
            className="cursor-pointer"
            size="24"
            color="white"
          />
        </div>

        <div className=" bg-[#232734] hover:bg-[#34394d] p-[9px] rounded-md transition duration-300 ease-in-out cursor-pointer">
          <BsInstagram
            className="cursor-pointer"
            size="24"
            color="white"
          />
        </div>

        <div className=" bg-[#232734] hover:bg-[#34394d] p-[9px] rounded-md transition duration-300 ease-in-out cursor-pointer">
          <BsFacebook
            className="cursor-pointer"
            size="24"
            color="white"
          />
        </div>

        <div className=" bg-[#232734] hover:bg-[#34394d] p-[9px] rounded-md transition duration-300 ease-in-out cursor-pointer">
          <BsLinkedin
            className="cursor-pointer"
            size="24"
            color="white"
          />
        </div>

        <div className=" bg-[#232734] hover:bg-[#34394d] p-[9px] rounded-md transition duration-300 ease-in-out cursor-pointer">
          <FaTelegramPlane
            className="cursor-pointer"
            size="24"
            color="white"
          />
        </div>
      </div>
    </div>
  );
};

export default aquaVote;

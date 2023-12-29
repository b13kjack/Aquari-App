import React from "react";
import { useState, useEffect } from "react";

//Import Icons
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { BiSolidWallet } from "react-icons/bi";

//Import Components
import Logo from "./logo.jsx";
import { FiZoomOut } from "react-icons/fi";
import { ActiveContext } from "../pages/home.jsx";
import Home from "../pages/home.jsx";

import { VoterContext } from "../pages/home.jsx";
import { useContext } from "react";

// -------------Connect MetaMask & Get Wallet Balance ------------//
//ANY EVM-BLOCKCHAIN
export let provider = new ethers.providers.Web3Provider(window.ethereum);
export let signer;
export let address;

async function connectMetamask() {
  //Metamask requires requesting permission to connect users accounts
  await provider.send("eth_requestAccounts", []);

  signer = await provider.getSigner();

  address = await signer.getAddress();

  console.log("Account Address:", address);
}

async function getBalance() {
  const balance = await signer.getBalance();
  const convertToEth = 1e18;
  console.log("Account Balance in Ether:", balance.toString() / convertToEth);
}

// ------------- Reading Data From A Smart Contract ------------//
//BNB CHAIN
const AquariAddress = "0x061ee0Fa1a83c7c36DAdf3CD11fED07E530009a1";

const usdtAbi = [
  {
    inputs: [
      { internalType: "address", name: "_aquariToken", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "AccessControlBadConfirmation", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "bytes32", name: "neededRole", type: "bytes32" },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "Action",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "aquariToken",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "title", type: "string" },
      { internalType: "string", name: "description", type: "string" },
    ],
    name: "createProposal",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "uint256", name: "duration", type: "uint256" },
          { internalType: "uint256", name: "upvotes", type: "uint256" },
          { internalType: "uint256", name: "downvotes", type: "uint256" },
          { internalType: "string", name: "title", type: "string" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "bool", name: "passed", type: "bool" },
          { internalType: "address", name: "proposer", type: "address" },
        ],
        internalType: "struct AquariGovernance.ProposalStruct",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "proposalId", type: "uint256" }],
    name: "getProposal",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "uint256", name: "duration", type: "uint256" },
          { internalType: "uint256", name: "upvotes", type: "uint256" },
          { internalType: "uint256", name: "downvotes", type: "uint256" },
          { internalType: "string", name: "title", type: "string" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "bool", name: "passed", type: "bool" },
          { internalType: "address", name: "proposer", type: "address" },
        ],
        internalType: "struct AquariGovernance.ProposalStruct",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProposals",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "uint256", name: "duration", type: "uint256" },
          { internalType: "uint256", name: "upvotes", type: "uint256" },
          { internalType: "uint256", name: "downvotes", type: "uint256" },
          { internalType: "string", name: "title", type: "string" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "bool", name: "passed", type: "bool" },
          { internalType: "address", name: "proposer", type: "address" },
        ],
        internalType: "struct AquariGovernance.ProposalStruct[]",
        name: "props",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStakeholderVotes",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "proposalId", type: "uint256" }],
    name: "getVotesOf",
    outputs: [
      {
        components: [
          { internalType: "address", name: "voter", type: "address" },
          { internalType: "uint256", name: "timestamp", type: "uint256" },
          { internalType: "bool", name: "choosen", type: "bool" },
        ],
        internalType: "struct AquariGovernance.VotedStruct[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "hasRole",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "proposalId", type: "uint256" },
      { internalType: "bool", name: "choosen", type: "bool" },
    ],
    name: "performVote",
    outputs: [
      {
        components: [
          { internalType: "address", name: "voter", type: "address" },
          { internalType: "uint256", name: "timestamp", type: "uint256" },
          { internalType: "bool", name: "choosen", type: "bool" },
        ],
        internalType: "struct AquariGovernance.VotedStruct",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
];

const usdtContract = new ethers.Contract(AquariAddress, usdtAbi, provider);

const x = await usdtContract.getProposal(2);
const y = await usdtContract.getProposals();
const z = await usdtContract.getVotesOf(2);

//Test to see if we can pull data from BSC
console.log(x);
console.log(y);
console.log(z);
console.log(y[0].description);

// const readDataFromAquari = async () => {
//   const usdtContract = new ethers.Contract(AquariAddress, usdtAbi, provider);

//   const x = await usdtContract.getProposal(2);
//   const y = await usdtContract.getProposals();
//   const z = await usdtContract.getVotesOf(2);

//   //Test to see if we can pull data from BSC
//   console.log(x);
//   console.log(y);
//   console.log(z);
//   console.log(x.description);
// };

//----------------------------------------------------------------------------

const navbar = ({
  getProposalFunc, //Here for Testing
  setGetProposalFunc,
  setGetProposalsFunc,
  setGetVotesOfFunc,
}) => {
  const activePage = useContext(ActiveContext);
  console.log(activePage.activePage);
  const startVote = async (param1) => {
    const txResponse = await usdtContract
      .connect(signer)
      .performVote(activePage.activePage, param1);
    await txResponse.wait();
  };
  useEffect(() => {
    //Push Blockchain Data to State
    setGetProposalFunc(x);
    setGetProposalsFunc(y);
    setGetVotesOfFunc(z);
  }, [1]);
  return (
    <div className="flex flex-row w-full bg-[#1d1f31] h-20 py-1.5 items-center border-gray-800 border-b ">
      <Logo />
      <div className="hidden absolute right-[250px] ml-[600px] md:flex flex-row gap-4 cursor-pointer select-none ">
        <div
          onClick={async () => {
            await startVote();
          }}
          className="flex rounded-lg w-[125px] h-[30px] bg-green-500 hover:bg-[#208040] transition duration-200 font-bold justify-center items-center tracking-wider"
        >
          Yes Vote
        </div>
        <div
          onClick={async () => {
            await startVote();
          }}
          className="flex rounded-lg w-[125px] h-[30px] bg-red-600 hover:bg-[#7a2020] transition duration-200 font-bold justify-center items-center tracking-wider"
        >
          No Vote
        </div>
      </div>

      <div className="mb-[35px]">
        <div className="absolute right-[95px] md:right-[35px] w-[45px] md:w-[170px] h-[40px] bg-[#00b351] rounded-md text-center hover:bg-[#207445] transition duration-200 ease-in-out cursor-pointer">
          <button
            onClick={async () => {
              await connectMetamask();
            }}
            className="flex flex-row gap-3 items-center ml-3 mt-2 select-none"
          >
            <BiSolidWallet size={22} />
            <p className="hidden font-semibold md:flex">Connect Wallet</p>
          </button>
        </div>
        {/* <BsInstagram className="cursor-pointer" size="24" color="white" />
        <BsFacebook className="cursor-pointer" size="24" color="white" />
        <BsLinkedin className="cursor-pointer" size="24" color="white" />
        <BsYoutube className="cursor-pointer" size="30" color="white" /> */}
      </div>
      <HiMenu
        className="flex mt-[6px] absolute right-[40px] cursor-pointer md:hidden hover:text-yellow-100 transition duration-100 ease-in-out"
        size="35"
      />
    </div>
  );
};

export default navbar;

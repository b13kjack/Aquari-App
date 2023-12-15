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

// -------------Connect MetaMask & Get Wallet Balance ------------//
//ANY EVM-BLOCKCHAIN
let provider = new ethers.providers.Web3Provider(window.ethereum);
let signer;
let address;

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

//----------------------------------------------------------------------------

const navbar = () => {
  return (
    <div className="flex flex-row w-full bg-[#1d1f31] h-20 py-1.5 items-center ">
      <Logo />
      <div className="mb-[35px]">
        <div className="absolute right-[95px] md:right-[35px] w-[45px] md:w-[170px] h-[40px] bg-[#00b351] rounded-md text-center hover:bg-[#2cc571] transition duration-200 ease-in-out cursor-pointer">
          <button
            onClick={() => {
              connectMetamask();
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

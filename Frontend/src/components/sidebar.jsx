import React from "react";
import { useState } from "react";

//Import Icons
import { TbSettings } from "react-icons/tb";
import { IoExitOutline } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";
import { IoIosSwap } from "react-icons/io";
import { MdOutlineHowToVote } from "react-icons/md";
import { FiLayers } from "react-icons/fi";
import { FaRegMap } from "react-icons/fa6";
import { AiOutlineBank } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
import { IoChatboxOutline } from "react-icons/io5";

//Import Images
import Maciej from "../assets/maciej.jpeg";

const sidebar = ({ selected, setSelected, jsx, connectedWallet }) => {
  const menuItems = [
    {
      name: "Home",
      icon: (
        <TiHomeOutline
          size="23px"
          className={
            selected === "Home"
              ? "text-yellow-200 group-hover:text-yellow-200 transition duration-200 ease-in-out"
              : "text-[#4e5467] group-hover:text-yellow-200 transition duration-200 ease-in-out"
          }
        />
      ),
    },
    {
      name: "Trading",
      icon: (
        <IoIosSwap
          size="23px"
          className={
            selected === "Trading"
              ? "text-yellow-200 group-hover:text-yellow-200 transition duration-200 ease-in-out"
              : "text-[#4e5467] group-hover:text-yellow-200 transition duration-200 ease-in-out"
          }
        />
      ),
    },
    {
      name: "AquaVote",
      icon: (
        <MdOutlineHowToVote
          size="23px"
          className={
            selected === "AquaVote"
              ? "text-yellow-200 group-hover:text-yellow-200 transition duration-200 ease-in-out"
              : "text-[#4e5467] group-hover:text-yellow-200 transition duration-200 ease-in-out" &&
                selected === "AquaVote2"
              ? "text-yellow-200 group-hover:text-yellow-200 transition duration-200 ease-in-out"
              : "text-[#4e5467] group-hover:text-yellow-200 transition duration-200 ease-in-out"
          }
        />
      ),
    },
    {
      name: "Stake",
      icon: (
        <FiLayers
          size="23px"
          className={
            selected === "Stake"
              ? "text-yellow-200 group-hover:text-yellow-200 transition duration-200 ease-in-out"
              : "text-[#4e5467] group-hover:text-yellow-200 transition duration-200 ease-in-out"
          }
        />
      ),
    },
    {
      name: "Cleanup Map",
      icon: (
        <FaRegMap
          size="23px"
          className={
            selected === "Cleanup Map"
              ? "text-yellow-200 group-hover:text-yellow-200 transition duration-200 ease-in-out"
              : "text-[#4e5467] group-hover:text-yellow-200 transition duration-200 ease-in-out"
          }
        />
      ),
    },
    {
      name: "DAO Financials",
      icon: (
        <AiOutlineBank
          size="23px"
          className={
            selected === "DAO Financials"
              ? "text-yellow-200 group-hover:text-yellow-200 transition duration-200 ease-in-out"
              : "text-[#4e5467] group-hover:text-yellow-200 transition duration-200 ease-in-out"
          }
        />
      ),
    },
    {
      name: "Forum",
      icon: (
        <IoChatboxOutline
          size="23px"
          className={
            selected === "Forum"
              ? "text-yellow-200 group-hover:text-yellow-200 transition duration-200 ease-in-out"
              : "text-[#4e5467] group-hover:text-yellow-200 transition duration-200 ease-in-out"
          }
        />
      ),
    },
    {
      name: "Wiki",
      icon: (
        <BsQuestionCircle
          size="23px"
          className={
            selected === "Wiki"
              ? "text-yellow-200 group-hover:text-yellow-200 transition duration-200 ease-in-out"
              : "text-[#4e5467] group-hover:text-yellow-200 transition duration-200 ease-in-out"
          }
        />
      ),
    },
  ];

  return (
    <div className="hidden flex-col bg-[#1d1f31] w-[250px] flex-shrink-0 md:flex mt-12">
      <div className="flex flex-col mt-[34px]">
        {menuItems.map((item, index) => {
          if (item.name === selected) {
            return (
              <button
                key={index}
                className="group flex flex-row items-center gap-[11px] cursor-pointer bg-[#191b2c] rounded-l-2xl py-3 pl-[25px] select-none transition duration-200 ease-in-out"
              >
                {item.icon}
                <h1 className="group font-bold text-yellow-200 group-hover:text-yellow-200 group:transition group:duration-200 ease-in-out">
                  {item.name}
                </h1>
                <div className="border-white border-b-2"></div>
              </button>
            );
          } else if (selected === "AquaVote2") {
            console.log("We know that AquaVote2 Is the selected page");
            if (item.name === "AquaVote") {
              return (
                <button
                  key={index}
                  className="group flex flex-row items-center gap-[11px] cursor-pointer bg-[#191b2c] rounded-l-2xl py-3 pl-[25px] select-none transition duration-200 ease-in-out"
                >
                  {item.icon}
                  <h1 className="group font-bold text-yellow-200 group-hover:text-yellow-200 group:transition group:duration-200 ease-in-out">
                    {item.name}
                  </h1>
                  <div className="border-white border-b-2"></div>
                </button>
              );
            } else {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setSelected(item.name);
                  }}
                  className="group flex flex-row items-center gap-[11px] cursor-pointer py-3 pl-[25px] select-none transition duration-200 ease-in-out"
                >
                  {item.icon}
                  <h1 className="group font-bold group-text-yellow-200 text-[#4e5467] group-hover:text-yellow-200 transition duration-200 ease-in-out">
                    {item.name}
                  </h1>
                  <div className="border-white border-b-2"></div>
                </button>
              );
            }
          } else {
            return (
              <button
                key={index}
                onClick={() => {
                  setSelected(item.name);
                }}
                className="group flex flex-row items-center gap-[11px] cursor-pointer py-3 pl-[25px] select-none transition duration-200 ease-in-out"
              >
                {item.icon}
                <h1 className="group font-bold text-[#4e5467] group-hover:text-yellow-200 transition duration-200 ease-in-out">
                  {item.name}
                </h1>
                <div className="border-white border-b-2"></div>
              </button>
            );
          }
        })}
      </div>

      <div className="absolute bottom-4 lg: ml-[25px] w-[200px] select-none profile-hide-on-height">
        <div className="flex flex-row items-center gap-3 mb-3">
          <img className="rounded-full h-[45px]" src={Maciej} />
          <p className="text-white font-bold">
            {connectedWallet ? connectedWallet.slice(0, 15) : "Disconnected"}
          </p>
        </div>

        <div className="border-[#4e5467] border-b-2"></div>

        <div className="flex flex-row mt-[10px] gap-2 cursor-pointer">
          <TbSettings
            size="30px"
            className="border p-1 border-[#4e5467] rounded-md hover:text-yellow-200 select-none transition duration-200 ease-in-out"
          />
          <a href="https://aquari.org">
            <IoExitOutline
              size="30px"
              className="border p-1 border-[#4e5467] rounded-md cursor-pointer hover:text-yellow-200 select-none transition duration-200 ease-in-out"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default sidebar;

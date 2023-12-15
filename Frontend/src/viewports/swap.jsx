import React from "react";

//Import Icons
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

//Import Components
import Widget from "../components/swapWidget";
import Chart from "../components/tradingChart";

const swap = () => {
  return (
    <div className="bg-[#191b2c] w-screen rounded-2xl rounded-b-none rounded-r-none p-8">
      <div className="flex flex-col xl:flex-row gap-x-8 gap-y-4 flex-shrink-0">
        <Chart />
        <Widget />
      </div>

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

export default swap;

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
import Trading from "../components/tradingViewWidget";

const swap = () => {
  return (
    <div className="bg-[#071222] full-height overflow-y-hidden map-container  rounded-b-none border-[#363a45] border-t-[2px] border-b-[3px]">
      <Trading />
    </div>
  );
};

export default swap;

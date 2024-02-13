import React, { useEffect } from "react";
import { useState } from "react";

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
import Logo from "../components/logo";

const swapBog = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.classList.add("no-scroll");
  }, []);

  return (
    // <div className="bg-[#090d18] full-height overflow-y-hidden map-container  rounded-b-none border-[#363a45] border-t-[2px] border-b-[3px]">
    //   <Trading />
    // </div>

    <div className="flex flex-row full-height overflow-hidden map-container bg-[#090d18] ">
      <div className="flex-1 bg-[#1e2735]  w-[30%]"></div>
      <div className="flex flex-col">
        <iframe
          style={{ height: "100svh", width: "380px" }}
          className="shrink-0 map-container stop-scrolling"
          src="https://app.bogged.finance/bsc/swap?&embed=1&tokenIn=BNB&tokenOut=0x6500197A2488610ACA288fd8E2DFE88Ec99E596c&theme=dark"
          frameborder="0"></iframe>
        <div className="bg-[#1e2735] flex-1 w-full"></div>
      </div>
    </div>
  );
};

export default swapBog;

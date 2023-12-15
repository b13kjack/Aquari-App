import React from "react";
import { Link } from "react-router-dom";

//Import Images
import Logo from "../assets/logo.png";
import LogoText from "../assets/logo-text.png";

const logo = () => {
  return (
    <Link to="/" className="flex flex-row cursor-pointer items-center">
      <img className="h-11 mx-5 mt-1 ml-8 " src={Logo} />
      <img className="h-[22px] mt-2 ml-[-6px]" src={LogoText} />
      {/* <h1 className="text-white text-2xl mx-[-14px] my-[5px] sm:text-4xl sm:py-2 sm:px-0 sm:mx-[-15px] sm:my-[4px] font-light tracking-wide w-[300px]">
        AQUARI
      </h1> */}
    </Link>
  );
};

export default logo;

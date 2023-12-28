import React from "react";
import { Pie } from "../components/pie";

const proposalChart = (props) => {
  return (
    <div className="flex flex-1 h-[650px] justify-center  bg-[#1d1f31] rounded-2xl">
      <div className="w-[500px] px-2">
        <h1 className="text-4xl ml-[120px] mt-8 tracking-wider">
          Vote Summary
        </h1>
        <div className="py-12">
          <Pie pieVotes={props.pieVotes} />
        </div>
      </div>
    </div>
  );
};

export default proposalChart;

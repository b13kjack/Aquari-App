import React from "react";
import { useState, useEffect } from "react";

// Import Components
import Navbar from "../components/navbar.jsx";
import Sidebar from "../components/sidebar.jsx";

//Import Viewport Page
import Swap from "../viewports/swap.jsx";
import Home from "../viewports/home.jsx";
import AquaVote from "../viewports/Vote/aquaVote.jsx";
import AquaVote2 from "../viewports/Vote/aquaVote2.jsx";
import Stake from "../viewports/stake.jsx";
import CleanupMap from "../viewports/cleanupMap.jsx";
import DAOFinancials from "../viewports/daoFinancials.jsx";
import Forum from "../viewports/forum.jsx";
import Wiki from "../viewports/wiki.jsx";

const home = () => {
  //State for Active Blockchain Proposal
  const [activePage, setActivePage] = useState(0); //use this one

  //State for Naviagtion
  const [selected, setSelected] = useState("Home");
  const [jsx, setJsx] = useState(<Home />);

  //State for Pulled Blockchain Data
  const [getProposalFunc, setGetProposalFunc] = useState("N/A");
  const [getProposalsFunc, setGetProposalsFunc] = useState([]);
  const [getVotesOfFunc, setGetVotesOfFunc] = useState("N/A");
  const [pieVotes, setPieVotes] = useState(1);

  useEffect(() => {
    switch (selected) {
      case "Swap":
        setJsx(<Swap />);
        break;
      case "Home":
        setJsx(<Home />);
        break;
      case "AquaVote":
        setJsx(
          <AquaVote
            lolz={setPieVotes}
            getProposalsFunc={getProposalsFunc}
            activePage={activePage}
            setActivePage={setActivePage}
            selected={selected}
            setSelected={setSelected}
            jsx={jsx}
          />
        );
        break;
      case "AquaVote2":
        setJsx(
          <AquaVote2
            pieVotez={pieVotes}
            setActivePage={setActivePage}
            activePage={activePage}
            selected={selected}
            setSelected={setSelected}
            jsx={jsx}
            getProposalFunc={getProposalFunc}
            getProposalsFunc={getProposalsFunc}
            getVotesOfFunc={getVotesOfFunc}
          />
        );
        break;
      case "Stake":
        setJsx(<Stake />);
        break;
      case "Cleanup Map":
        setJsx(<CleanupMap />);
        break;
      case "DAO Financials":
        setJsx(<DAOFinancials />);
        break;
      case "Forum":
        setJsx(<Forum />);
        break;
      case "Wiki":
        setJsx(<Wiki />);
        break;
      default:
        setJsx(<Swap />);
    }
  }, [selected]); // This effect runs whenever 'selected' changes

  console.log(selected);

  return (
    <>
      <div className="flex  h-screen">
        <div className="w-full fixed">
          <Navbar
            getProposalFunc={getProposalFunc}
            setGetProposalFunc={setGetProposalFunc}
            setGetProposalsFunc={setGetProposalsFunc}
            setGetVotesOfFunc={setGetVotesOfFunc}
          />
        </div>

        <div className="h-full overflow-auto flex-row">
          {/* Menu Bar */}
          <Sidebar selected={selected} setSelected={setSelected} jsx={jsx} />
        </div>

        <div className="flex-1 flex flex-col overflow-y-auto mt-[79px] ">
          {/* Viewport (Route Pages Here) */}
          {/* <div className="">
            <Navbar />
          </div> */}

          {jsx}
        </div>
      </div>
    </>
  );
};

export default home;

import React from "react";
import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

const ActiveContext = createContext(3);
const ProposalContext = createContext({}); //Must Create Context to pass varibales down component tree
const VoterContext = createContext({});
const BlockchainContext = createContext({});

export { ActiveContext };
export { ProposalContext }; //Must Export Context To Use Outside of File
export { VoterContext };
export { BlockchainContext };

// Import Components
import Navbar from "../components/navbar.jsx";
import { provider } from "../components/navbar.jsx";
import Sidebar from "../components/sidebar.jsx";
import SidebarMobile from "../components/sidebarMobile.jsx";
console.log("logging provider", provider);

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
  const [iterationState, setIterationState] = useState(0); //iteration counter for votedDisplay component

  //State for Naviagtion
  const [selected, setSelected] = useState("Home");
  const [jsx, setJsx] = useState(<Home />);
  const [mobileNav, setMobileNav] = useState(false);

  //State for Pulled Blockchain Data
  const [getProposalFunc, setGetProposalFunc] = useState("N/A");
  const [getProposalsFunc, setGetProposalsFunc] = useState([]);
  const [getVotesOfFunc, setGetVotesOfFunc] = useState("N/A");
  const [pieVotes, setPieVotes] = useState(1);
  const [connectedWallet, setConnectedWallet] = useState("Disconnected");

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
      <BlockchainContext.Provider value={{ provider, setSelected }}>
        <VoterContext.Provider value={{ getVotesOfFunc, setGetVotesOfFunc }}>
          <ProposalContext.Provider
            value={{
              getProposalsFunc,
              setGetProposalsFunc,
              getProposalFunc,
              setGetProposalFunc,
            }}
          >
            <ActiveContext.Provider value={{ activePage, setActivePage }}>
              <div className="flex  h-screen">
                {mobileNav ? (
                  <SidebarMobile
                    connectedWallet={connectedWallet}
                    selected={selected}
                    setSelected={setSelected}
                    jsx={jsx}
                  />
                ) : null}

                <div className="w-full z-40 fixed">
                  <Navbar
                    getProposalsFunc={getProposalsFunc}
                    setConnectedWallet={setConnectedWallet}
                    mobileNav={mobileNav}
                    setMobileNav={setMobileNav}
                    activePage={activePage}
                    getProposalFunc={getProposalFunc}
                    setGetProposalFunc={setGetProposalFunc}
                    setGetProposalsFunc={setGetProposalsFunc}
                    setGetVotesOfFunc={setGetVotesOfFunc}
                  />
                </div>

                <div className="h-full overflow-auto flex-row">
                  {/* Menu Bar */}
                  <Sidebar
                    connectedWallet={connectedWallet}
                    selected={selected}
                    setSelected={setSelected}
                    jsx={jsx}
                  />
                </div>

                <div className="flex-1 flex flex-col overflow-y-auto mt-[79px] ">
                  {/* Viewport (Route Pages Here) */}
                  {/* <div className="">
            <Navbar />
          </div> */}

                  {jsx}
                </div>
              </div>
            </ActiveContext.Provider>
          </ProposalContext.Provider>
        </VoterContext.Provider>
      </BlockchainContext.Provider>
    </>
  );
};

export default home;

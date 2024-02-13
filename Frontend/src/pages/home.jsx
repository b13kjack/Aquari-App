import React from "react";
import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import ReactMapGL, { FullscreenControl } from "react-map-gl";

//Import Privy Wallet Provider
import PrivyProviderB from "../providers/PrivyProviderB.jsx";

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
import { signer, provider } from "../components/navbar.jsx";
import Sidebar from "../components/sidebar.jsx";
import SidebarMobile from "../components/sidebarMobile.jsx";
console.log("logging provider", provider);

//Import Viewport Page
import Swap from "../viewports/swap.jsx";
import BuyAquari from "../viewports/swapBog.jsx";
import Home from "../viewports/Home/home.jsx";
import HomeArticle from "../viewports/Home/homeArticle.jsx";
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

  //State for News Article Pages
  const [newsObject, setNewsObject] = useState({
    headline: "Error Downloading Article",
    category: null,
    image: null,
    date: "N/A",
    article_text: "Aquari Failed to Load the Article, Please Restart the App.",
  });

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
        setJsx(
          <div className="">
            <Swap />
          </div>
        );
        break;
      case "Home":
        setJsx(
          <Home
            setNewsObject={setNewsObject}
            setSelected={setSelected}
          />
        );
        break;
      case "Buy Aquari":
        setJsx(<BuyAquari setSelected={setSelected} />);
        break;
      case "HomeArticle":
        setJsx(
          <HomeArticle
            newsObject={newsObject}
            setSelected={setSelected}
          />
        );
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
        setJsx(
          <div className="map-container">
            <Stake />
          </div>
        );
        break;
      case "Cleanup Map":
        setJsx(
          <div className="bg-[#191b2c] h-full w-full overflow-y-hidden  rounded-b-none map-container rounded-r-none">
            <ReactMapGL
              initialViewState={{
                longitude: 0.1276,
                latitude: 51.5072,
                zoom: 4.4,
              }}
              // style={{ width: "100%", height: "100%" }}
              mapStyle="mapbox://styles/dmastermind/clfn80l9800d201qiaud2dayd"
              // mapStyle="mapbox://styles/mapbox/dark-v10"
              mapboxAccessToken="pk.eyJ1IjoiZG1hc3Rlcm1pbmQiLCJhIjoiY2xmbjd0eHF5MGpuMTNycDYzZnZvY2NsNCJ9.vSsm8I_l-DQNPh0Q-vS0dQ"
              //{...viewport}  -- for Applicaiton Controlled Map
            ></ReactMapGL>
          </div>
        );
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
      <PrivyProviderB>
        <BlockchainContext.Provider value={{ signer, provider, setSelected }}>
          <VoterContext.Provider value={{ getVotesOfFunc, setGetVotesOfFunc }}>
            <ProposalContext.Provider
              value={{
                getProposalsFunc,
                setGetProposalsFunc,
                getProposalFunc,
                setGetProposalFunc,
              }}>
              <ActiveContext.Provider value={{ activePage, setActivePage }}>
                <div className="flex map-container full-height overflow-hidden">
                  {mobileNav ? (
                    <SidebarMobile
                      setMobileNav={setMobileNav}
                      connectedWallet={connectedWallet}
                      selected={selected}
                      setSelected={setSelected}
                      jsx={jsx}
                    />
                  ) : null}

                  <div className="w-full z-40 fixed">
                    <Navbar
                      getProposalsFunc={getProposalsFunc}
                      connectedWallet={connectedWallet}
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

                  <div
                    className="h-full
                 flex-row">
                    {/* Menu Bar */}
                    <Sidebar
                      connectedWallet={connectedWallet}
                      selected={selected}
                      setSelected={setSelected}
                      jsx={jsx}
                    />
                  </div>

                  <div className="flex-1 bg-[#090d18] bg-opacity-0 flex-grow flex flex-col map-container overflow-x-hidden mt-[60px] sm:mt-[80px]">
                    {/* Viewport (Route Pages Here) */}
                    {jsx}
                  </div>
                </div>
              </ActiveContext.Provider>
            </ProposalContext.Provider>
          </VoterContext.Provider>
        </BlockchainContext.Provider>
      </PrivyProviderB>
    </>
  );
};

export default home;

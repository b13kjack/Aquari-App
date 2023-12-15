import React from "react";
import { useState, useEffect } from "react";

// Import Components
import Navbar from "../components/navbar.jsx";
import Sidebar from "../components/sidebar.jsx";

//Import Viewport Page
import Swap from "../viewports/swap.jsx";
import Home from "../viewports/home.jsx";
import AquaVote from "../viewports/aquaVote.jsx";
import Stake from "../viewports/stake.jsx";
import CleanupMap from "../viewports/cleanupMap.jsx";
import DAOFinancials from "../viewports/daoFinancials.jsx";
import Forum from "../viewports/forum.jsx";
import Wiki from "../viewports/wiki.jsx";

const home = () => {
  const [selected, setSelected] = useState("Home");
  const [jsx, setJsx] = useState(<Home />);

  useEffect(() => {
    switch (selected) {
      case "Swap":
        setJsx(<Swap />);
        break;
      case "Home":
        setJsx(<Home />);
        break;
      case "AquaVote":
        setJsx(<AquaVote />);
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
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1 overflow-hidden flex-row">
          {/* Menu Bar */}
          <Sidebar selected={selected} setSelected={setSelected} jsx={jsx} />
          {/* Viewport (Route Pages Here) */}
          {jsx}
        </div>
      </div>
    </>
  );
};

export default home;

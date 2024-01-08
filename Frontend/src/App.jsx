import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//Import Pages
import Home from "./pages/home";
import Modal from "./components/warningModal";

function App() {
  const [count, setCount] = useState(0);

  const lockScreen = async () => {
    await screen.orientation.lock("portrait");
  };

  return (
    <>
      <div className="map-container">
        <Home />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

//Import Pages
import Home from "./pages/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="map-container">
        <Home />
      </div>
    </>
  );
}

export default App;

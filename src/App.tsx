import React, { useEffect, useState } from "react";

// import "./App.css";
import BlockUi from "./Session2/BlockUi7";
import Gallery from "./Examples/Gallery/Gallery";
import Accordions from "./components/ButtonAccordions/Accordions";
import Tab from "./components/ButtonTabs/Tab";
import TabMusic from "./Session3/Musicplayer/TabMusic/TabMusic";
import MusicPlayer from "./Session3/Musicplayer";
import LoginForm from "./Session3/Form";
import RegiterForm from "./Session3/Register";

function App() {
  return (
    <div className="main">
      <MusicPlayer />
      {/* <RegiterForm /> */}
      {/* <BlockUi /> */}
    </div>
  );
}

export default App;

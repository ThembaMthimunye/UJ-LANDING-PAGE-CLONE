import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Example from "./Components/Slide";
import Hero from "./Components/Hero";
import SearchSection from "./Components/SearchSection";
import LatestNews from "./Components/LatestNews";
// import Navbar from "./Components/drop";
import Swipper from "./Components/Swipper";
import ConnectUj from "./Components/ConnectUj";
import Gauge from "./Components/Gauge";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Example />

      <Hero />

      <SearchSection />
       {/* <LatestNews/>   */}
       <Swipper /> 
       <ConnectUj /> 
       <Gauge /> 
      <Footer />
    </div>
  );
}

export default App;

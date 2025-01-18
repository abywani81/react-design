import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./components/pages/Home";
// import Navbar from "./components/sharedComponent/Navbar";
import Footer from "./components/sharedComponent/Footer";
import PortFolio from "./components/pages/PortFolio";
import Projects from "./components/pages/Projects";
import NoPage from "./components/pages/NoPage";
import ResponsiveAppBar from "./components/sharedComponent/AppBar";
import IntroSection from "./components/pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ResponsiveAppBar />

        <div className="main-container">
          <Routes>
            <Route path="*" element={<NoPage />} />
            <Route path="/" element={<IntroSection />} />
            {/* // when on /portfolio the said component will be mounted  */}
            <Route path="/portfolio" element={<PortFolio />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

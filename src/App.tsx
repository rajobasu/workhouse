import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import { Donate } from "./components/Donate";
import { Volunteer } from "./components/Volunteer";
import { Metaverse } from "./components/Metaverse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={LandingPage} />
          <Route path={"/dashboard"} element={Dashboard} />
          <Route path={"/login"} element={Login} />
          <Route path={"/donate"} element={Donate} />
          <Route path={"/volunteer"} element={Volunteer} />
          <Route path={"/metaverse"} element={Metaverse} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

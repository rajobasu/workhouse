import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppProvider} from "./context/AppContext";
import {LandingPage} from "./pages/LandingPage";
import {Dashboard} from "./pages/Dashboard";
import {Login} from "./pages/Login";
import {Donate} from "./pages/Donate";
import {Volunteer} from "./pages/Volunteer";
import {Metaverse} from "./pages/Metaverse";
import {Authenticate} from "./pages/Authenticate";
import {SessionPage} from "./pages/SessionPage";
import {MetaMask} from "./pages/MetaMask";

function App() {
  const AuthenticatedDashboard = () => {
    return (
      <Authenticate>
        <Dashboard />
      </Authenticate>
    );
  };

  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path={"/"}>
            <Route index element={<LandingPage />} />
            <Route path={"dashboard"} element={<AuthenticatedDashboard />} />
            <Route path={"login"} element={<Login />} />
            <Route path={"donate"} element={<Donate />} />
            <Route path={"volunteer"} element={<Volunteer />} />
            <Route path={"metaverse"} element={<Metaverse />} />
            <Route path={"/metamask"} element={<MetaMask/>}/>
            <Route path={"session"} element={<SessionPage />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;

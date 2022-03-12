import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { LandingPage } from "./pages/LandingPage";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Donate } from "./pages/Donate";
import { Volunteer } from "./pages/Volunteer";
import { Metaverse } from "./pages/Metaverse";
import { Authenticate } from "./pages/Authenticate";
import { SessionPage } from "./pages/SessionPage";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route
            path={"/dashboard"}
            element={
              <Authenticate>
                <Dashboard />
              </Authenticate>
            }
          />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/donate"} element={<Donate />} />
          <Route path={"/volunteer"} element={<Volunteer />} />
          <Route path={"/metaverse"} element={<Metaverse />} />
          <Route path={"/session"} element={<SessionPage />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;

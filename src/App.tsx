import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { LandingPage } from "./pages/LandingPage";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Volunteer } from "./pages/Volunteer";
import { Authenticate } from "./pages/Authenticate";
import { SessionPage } from "./pages/SessionPage";
import { MetaMask } from "./pages/MetaMask";
import { NotifProvider } from "./context/notif-context";
import { Navbar } from "./components/Navbar";
import { WhiteBaseContainer } from "./css/css";
import "./css/App.css";

function App() {
  const AuthenticatedDashboard = () => {
    return (
      <Authenticate>
        <Dashboard />
      </Authenticate>
    );
  };

  const AuthenticatedSessionPage = () => {
    return (
      <Authenticate>
        <SessionPage />
      </Authenticate>
    );
  };

  return (
    <BrowserRouter>
      <AppProvider>
        <NotifProvider>
          <WhiteBaseContainer>
            <Navbar />
            <Routes>
              <Route path={"/"}>
                <Route index element={<LandingPage />} />
                <Route
                  path={"dashboard"}
                  element={<AuthenticatedDashboard />}
                />
                <Route path={"login"} element={<Login />} />
                <Route path={"volunteer"} element={<Volunteer />} />
                <Route path={"/metamask"} element={<MetaMask />} />
                <Route
                  path={"session"}
                  element={<AuthenticatedSessionPage />}
                />
              </Route>
            </Routes>
          </WhiteBaseContainer>
        </NotifProvider>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;

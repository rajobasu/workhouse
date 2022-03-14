import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { LandingPage } from "./pages/LandingPage";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Donate } from "./pages/Donate";
import { Volunteer } from "./pages/Volunteer";
import { Metaverse } from "./pages/Metaverse";
import { SessionPage } from "./pages/SessionPage";
import { MetaMask } from "./pages/MetaMask";
import { NotifProvider } from "./context/notif-context";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const AuthenticatedDashboard = () => {
  //   return (
  //     <Authenticate>
  //       <Dashboard />
  //     </Authenticate>
  //   );
  // };
  //
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const AuthenticatedSessionPage = () => {
  //   return (
  //     <Authenticate>
  //       <SessionPage />
  //     </Authenticate>
  //   );
  // };

  return (
    <BrowserRouter>
      <AppProvider>
        <NotifProvider>
          <Routes>
            <Route path={"/"}>
              <Route index element={<LandingPage />} />
              <Route path={"dashboard"} element={<Dashboard />} />
              <Route path={"login"} element={<Login />} />
              <Route path={"donate"} element={<Donate />} />
              <Route path={"volunteer"} element={<Volunteer />} />
              <Route path={"metaverse"} element={<Metaverse />} />
              <Route path={"/metamask"} element={<MetaMask />} />
              <Route path={"session"} element={<SessionPage />} />
            </Route>
          </Routes>
        </NotifProvider>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;

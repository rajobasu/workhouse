import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
          <Routes >
              <Route path={"/"} element={LandingPage}/>
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

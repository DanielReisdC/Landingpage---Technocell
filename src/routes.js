import React from "react";
import { HashRouter  as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";



function MyRoutes() {
  return (
   
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
         
         
          
        </Routes>
      </Router>
  
  );
}

export default MyRoutes;

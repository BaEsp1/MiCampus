import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LandingPage";
import DashboardUser from "./Pages/Dashboar-User";
import Navbar from "./Components/NavBar/NavBar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<DashboardUser />} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LandingPage";
import DashboardUser from "./Pages/Dashboar-User";

const App: React.FC = () => {
return(
  <Router>
    <Routes>
    <Route path="/" element = {<LandingPage/>} />
      <Route path="/login" element = {<Login/>} />
      {/* Rutas para Alumnos: */}
      <Route path="/user" element = {<DashboardUser/>} />

      {/* Rutas para profesores: */}

    </Routes>
  </Router>
)
}

export default App

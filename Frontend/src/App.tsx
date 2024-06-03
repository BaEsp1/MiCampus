import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/NavBar/NavBar";
import PerfilAlumno from "./Pages/Perfil-Alumno";
import DashboardAlumno from "./Pages/Dashboard-Alumno";

const App: React.FC = () => {

  // Debemos restringir luego las vistas para alumno , profesor y general
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        {/* Rutas del Alumno */}
        <Route path="/dash" element={<DashboardAlumno />} />
        <Route path="/alumno" element ={<PerfilAlumno/>} />
      </Routes>
    </>
  );
}

export default App;

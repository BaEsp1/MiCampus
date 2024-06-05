import React from "react";
import Navbar from "./Components/NavBar/NavBar";
import AppRouter from "./router/AppRouter";

const App: React.FC = () => {

  // Debemos restringir luego las vistas para alumno , profesor y general
  return (
    <>
      <Navbar />
      <AppRouter/>
    </>
  );
}

export default App;

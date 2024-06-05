import React from "react";
import Navbar from "./Components/NavBar/NavBar";
import AppRouter from "./router/AppRouter";

const App: React.FC = () => {

 
  return (
    <>
      <Navbar />
      <AppRouter/>
    </>
  );
}

export default App;

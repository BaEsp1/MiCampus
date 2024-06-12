import React from "react";
import AppRouter from "./router/AppRouter";
import Navbar from "./Components/NavBar/NavBar";

const App: React.FC = () => {

 
  return (
    <>
      <Navbar />
      <AppRouter/>
    </>
  );
}

export default App;

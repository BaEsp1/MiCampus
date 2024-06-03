import React from "react";
import Navbar from "./Components/NavBAr/NavBar";
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

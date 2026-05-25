import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./routing/Approting";



function App() {
  return (
    <>
      <Navbar />
      <AppRouter/>
      <Footer />
    </>
  );
}

export default App;
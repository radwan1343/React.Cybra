import React from "react";
import Home from "./../home";
import About from "./../about";
import Clients from "./../clients";
import Footer from "./../footer";
import Navbar from "./../navbar";

function Index() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Clients />
      <Footer />
    </div>
  );
}

export default Index;

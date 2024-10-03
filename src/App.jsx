import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Certificates />
    </div>
  );
}

export default App;

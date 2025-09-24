import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Links from "./components/Links";
import Certifications from "./components/certifications";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Links/>
      <Skills />
      <Certifications/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

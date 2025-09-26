import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Certifications from "./components/certifications";
import Projects from "./components/Projects";
import Links from "./components/Links";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Links/>
      <Skills />
      <Certifications/>
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
}
   <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          overflow-x: hidden;
        }
        html, body {
          width: 100%;
        }
        @media (max-width: 768px) {
          section {
            padding: 10px !important;
          }
        }
      `}</style>


export default App;

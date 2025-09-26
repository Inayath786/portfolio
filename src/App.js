import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Certifications from "./components/certifications";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Certifications/>
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

import React from "react";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    background: "linear-gradient(90deg, #1e3c72, #2a5298)",
    color: "#fff",
    position: "sticky",
    top: "0",
    zIndex: "1000",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
    animation: "fadeDown 1s ease"
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 15px",
    fontWeight: "bold",
    transition: "color 0.3s"
  };

  return (
    <nav style={navStyle}>
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>🚀 Inayath Arifa</div>
      <ul style={{ listStyle: "none", display: "flex", margin: "0" }}>
        <li><a style={linkStyle} href="#hero">Home</a></li>
        <li><a style={linkStyle} href="#about">About</a></li>
        <li><a style={linkStyle} href="#skills">Skills</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

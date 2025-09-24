import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  const footerStyle = {
    background: "#111",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    fontSize: "14px"
  };

  const iconStyle = {
    margin: "0 10px",
    color: "#fff",
    fontSize: "20px",
    transition: "color 0.3s"
  };

  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} Inayath Arifa | Made with ❤️ & React</p>
      <div style={{ marginTop: "10px" }}>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          <FaGithub style={iconStyle} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
          <FaLinkedin style={iconStyle} />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
          <FaTwitter style={iconStyle} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

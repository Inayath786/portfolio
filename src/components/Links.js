import React from "react";

function Links() {
  const sectionStyle = {
    padding: "60px 20px",
    background: "#fff",
    textAlign: "center"
  };

  const titleStyle = { fontSize: "36px", marginBottom: "30px" };
  const linkStyle = {
    display: "inline-block",
    margin: "10px",
    padding: "12px 24px",
    background: "#1e90ff",
    color: "#fff",
    borderRadius: "50px",
    textDecoration: "none",
    fontSize: "18px",
    transition: "transform 0.3s"
  };

  return (
    <section id="links" style={sectionStyle}>
      <h2 style={titleStyle}>🔗 My Links</h2>
      <a href="https://inayathwrites.space" target="_blank" rel="noopener noreferrer" style={linkStyle}>
        ✍️ Blog
      </a>
      <a href="https://www.linkedin.com/in/inayatharifa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer" style={linkStyle}>
        💼 LinkedIn
      </a>
      <a href="https://github.com/Inayath786?tab=repositories" target="_blank" rel="noopener noreferrer" style={linkStyle}>
        🐙 GitHub
      </a>
      <a href="https://technexi.myshopify.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
        🛒 Dropshipping Website
      </a>
    </section>
  );
}

export default Links;

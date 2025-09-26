import React, { useEffect } from "react";

function Hero() {
  const heroStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    padding: "40px 20px",
    background: "linear-gradient(270deg, #667eea, #764ba2, #ff6b6b)",
    backgroundSize: "600% 600%",
    animation: "gradientBG 15s ease infinite",
    position: "relative",
    overflow: "hidden",
    textAlign: "center"
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: "0 auto",
    maxWidth: "1200px",
    gap: "40px",
    padding: "30px",
    borderRadius: "25px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
    transition: "transform 0.3s ease"
  };

  const contentStyle = {
    flex: "1 1 400px",
    padding: "20px",
    maxWidth: "600px",
    animation: "fadeInUp 1.2s ease forwards"
  };

  const imageContainerStyle = {
    flex: "1 1 300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    animation: "fadeInRight 1.2s ease forwards"
  };

  const imageStyle = {
    width: "320px",
    height: "420px",
    borderRadius: "30px",
    objectFit: "cover",
    boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
    transition: "transform 0.5s ease, box-shadow 0.5s ease"
  };

  const titleStyle = {
    fontSize: "3rem",
    margin: "10px 0",
    fontWeight: "900",
    textShadow: "2px 2px 20px rgba(0,0,0,0.6)",
    lineHeight: "1.2",
    background: "linear-gradient(90deg, #ff6b6b, #1e90ff, #00d4ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  };

  const subtitleStyle = {
    fontSize: "1.3rem",
    margin: "10px 0",
    color: "#f0f0f0",
    lineHeight: "1.6",
    maxWidth: "500px",
    fontStyle: "italic"
  };

  const buttonStyle = {
    padding: "14px 28px",
    background: "#ff6b6b",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    marginTop: "20px",
    fontSize: "1.1rem",
    textDecoration: "none",
    transition: "transform 0.3s, box-shadow 0.3s, background 0.3s",
    boxShadow: "0 6px 20px rgba(0,0,0,0.3)"
  };

  const resumeButtonStyle = {
    ...buttonStyle,
    background: "#1e90ff",
    marginLeft: "10px"
  };

  return (
    <section id="hero" style={heroStyle}>
      <div style={containerStyle}>
        {/* Text Content */}
        <div style={contentStyle}>
          <h1 style={titleStyle}>👋 Hello, I'm Samyukta</h1>
          <p style={subtitleStyle}>
            I’m  passionate in <strong>Embedded Systems</strong> skilled in ARM and C 
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            {/* <a
              href="#projects"
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
              }}
            >
              💻 View My Work
            </a> */}
            <a
              href="/samyukta-resume.pdf"
              download="Samyukta_Resume.pdf"
              style={resumeButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)";
              }}
            >
              📄 Download Resume
            </a>
          </div>
        </div>

        {/* Image */}
        <div style={imageContainerStyle}>
          <img
            src="samyukta.jpg"
            alt="Samyukta"
            style={imageStyle}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05) translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          />
        </div>
      </div>

      {/* Inline animation for gradient background */}
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInRight {
            0% { opacity: 0; transform: translateX(20px); }
            100% { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
    </section>
  );
}

export default Hero;

import React from "react";

function Hero() {
  const heroStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "left",
    padding: "20px",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, #667eea, #764ba2)"
  };

  const contentStyle = {
    flex: 1,
    padding: "20px",
    maxWidth: "600px"
  };

  const imageStyle = {
    flex: 1,
    maxWidth: "300px",
    borderRadius: "50%",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    animation: "fadeInImage 2s ease"
  };

  const titleStyle = {
    fontSize: "48px",
    margin: "10px",
    fontWeight: "bold",
    textShadow: "2px 2px 15px rgba(0,0,0,0.3)",
    animation: "zoomIn 1s ease"
  };

  const subtitleStyle = {
    fontSize: "22px",
    margin: "10px",
    color: "#e0e0e0",
    lineHeight: "1.6"
  };

  const buttonStyle = {
    padding: "12px 24px",
    background: "#ff6b6b",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    marginTop: "20px",
    fontSize: "18px",
    transition: "transform 0.3s, box-shadow 0.3s",
    textDecoration: "none",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
  };

  const resumeButtonStyle = {
    ...buttonStyle,
    background: "#1e90ff",
    marginLeft: "10px"
  };

  return (
    <section id="hero" style={heroStyle}>
      <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
        {/* Content */}
        <div style={contentStyle}>
          <h1 style={titleStyle}>👋 Hello, I'm Inayath Arifa</h1>
          <p style={subtitleStyle}>
            I’m a passionate <strong>Full Stack Developer</strong> skilled in building scalable web applications, cloud architectures, AWS DevOps, and system design 🚀.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href="#projects" style={buttonStyle}
               onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
               onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
              💻 View My Work
            </a>
            <a href="/inayath-resume.pdf" download="Inayath_Resume.pdf" style={resumeButtonStyle}
               onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
               onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
              📄 Download Resume
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div>
          <img
            src="inayath-pic.jpg" // Put your picture path here
            alt="Inayath Arifa"
            style={imageStyle}
          />
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes zoomIn {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeInImage {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

export default Hero;

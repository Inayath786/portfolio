import React from "react";

function Hero() {
  const heroStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    textAlign: "left",
    padding: "20px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    flexWrap: "wrap" // allows content to wrap on smaller screens
  };

  const contentStyle = {
    flex: "1 1 400px",
    padding: "20px",
    maxWidth: "600px",
    minWidth: "300px"
  };

  const imageStyle = {
    flex: "1 1 300px",
    maxWidth: "400px",
    width: "100%",
    borderRadius: "50%",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    animation: "fadeInImage 2s ease"
  };

  const titleStyle = {
    fontSize: "3rem",
    margin: "10px",
    fontWeight: "bold",
    textShadow: "2px 2px 15px rgba(0,0,0,0.3)"
  };

  const subtitleStyle = {
    fontSize: "1.2rem",
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
    fontSize: "1rem",
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
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "40px" }}>
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
        <div style={{ flex: "1 1 300px", textAlign: "center" }}>
          <img
            src="inayath-pic.jpg"
            alt="Inayath Arifa"
            style={imageStyle}
          />
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInImage {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 768px) {
          section {
            flex-direction: column;
            text-align: center !important;
          }
          h1 {
            font-size: 2.2rem !important;
          }
          p {
            font-size: 1rem !important;
          }
          img {
            max-width: 250px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;

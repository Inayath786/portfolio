import React from "react";

function Hero() {
  const heroStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column", // start stacked for mobile
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    padding: "20px",
    background: "linear-gradient(135deg, #667eea, #764ba2)"
  };

const containerStyle= {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  margin: "0 auto", // center content without extra spacing
  overflow: "hidden" // prevent extra scroll
}


  const contentStyle = {
    flex: "1 1 400px",
    padding: "20px",
    maxWidth: "600px"
  };

  const imageContainerStyle = {
    flex: "1 1 300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px"
  };

  const imageStyle = {
    Width: "50px",
    height: "400px",
    borderRadius: "50%",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
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
    textDecoration: "none",
    transition: "transform 0.3s, box-shadow 0.3s",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
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

        {/* Image */}
        <div style={imageContainerStyle}>
          <img
            src="inayath-pic3.jpg" // Replace with your picture path
            alt="Inayath Arifa"
            style={imageStyle}
          />
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          section {
            text-align: center;
          }
          div[style*="flex-direction: row"] {
            flex-direction: column !important;
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

import React from "react";

function About() {
  const aboutStyle = {
    padding: "60px 20px",
    background: "#fff",
    textAlign: "center"
  };

  const headingStyle = { fontSize: "36px", marginBottom: "20px" };
  const paragraphStyle = { fontSize: "18px", color: "#555", maxWidth: "800px", margin: "auto", lineHeight: "1.8" };

  return (
    <section id="about" style={aboutStyle}>
      <h2 style={headingStyle}>About Me</h2>
      <p style={paragraphStyle}>
        Hi, I'm <span style={{ fontWeight: "bold", color: "#1e90ff" }}>Inayath Arifa</span>, a passionate <span style={{ fontWeight: "bold", color: "#1e90ff" }}>Full Stack Developer 💻</span> and <span style={{ fontWeight: "bold", color: "#1e90ff" }}>AWS DevOps Engineer ☁</span> with a strong interest in building <span style={{ fontWeight: "bold", color: "#ff6b6b" }}>scalable</span>, <span style={{ fontWeight: "bold", color: "#ff6b6b" }}>efficient</span>, and <span style={{ fontWeight: "bold", color: "#ff6b6b" }}>secure applications</span>.<br /><br />

        I specialize in <span style={{ fontWeight: "bold", color: "#1e90ff" }}>MERN stack development</span> (<span style={{ fontWeight: "bold", color: "#ff6b6b" }}>MongoDB</span>, <span style={{ fontWeight: "bold", color: "#ff6b6b" }}>Express.js</span>, <span style={{ fontWeight: "bold", color: "#ff6b6b" }}>React.js</span>, <span style={{ fontWeight: "bold", color: "#ff6b6b" }}>Node.js</span>) and enjoy designing <span style={{ fontWeight: "bold", color: "#1e90ff" }}>modern</span>, <span style={{ fontWeight: "bold", color: "#1e90ff" }}>user-friendly interfaces 🎨</span>.<br /><br />

        Alongside development, I work with <span style={{ fontWeight: "bold", color: "#1e90ff" }}>AWS cloud services</span> (<span style={{ fontWeight: "bold", color: "#ff6b6b" }}>EC2</span>, <span style={{ fontWeight: "bold", color: "#ff6b6b" }}>S3</span>, <span style={{ fontWeight: "bold", color: "#ff6b6b" }}>Lambda</span>, <span style={{ fontWeight: "bold", color: "#ff6b6b" }}>RDS</span>, <span style={{ fontWeight: "bold", color: "#ff6b6b" }}>CloudFront</span>, <span style={{ fontWeight: "bold", color: "#ff6b6b" }}>Auto Scaling</span>, <span style={{ fontWeight: "bold", color: "#ff6b6b" }}>Load Balancers</span>) to deploy and manage applications in a <span style={{ fontWeight: "bold", color: "#1e90ff" }}>secure</span> and <span style={{ fontWeight: "bold", color: "#1e90ff" }}>scalable way 🚀</span>.<br /><br />

        I also have a strong foundation in <span style={{ fontWeight: "bold", color: "#1e90ff" }}>System Design & Architecture 🏗</span>, covering concepts like <span style={{ fontWeight: "bold", color: "#ff6b6b" }}>scaling</span>, <span style={{ fontWeight: "bold", color: "#ff6b6b" }}>caching</span>, <span style={{ fontWeight: "bold", color: "#ff6b6b" }}>databases</span>, <span style={{ fontWeight: "bold", color: "#ff6b6b" }}>replication</span>, <span style={{ fontWeight: "bold", color: "#ff6b6b" }}>sharding</span>, and <span style={{ fontWeight: "bold", color: "#ff6b6b" }}>event-driven design</span>.<br /><br />

        My ultimate goal is to become a <span style={{ fontWeight: "bold", color: "#1e90ff" }}>high-impact software engineer 🎯</span>, solving real-world problems and continuously growing in both technical and leadership skills.
      </p>
    </section>
  );
}

export default About;

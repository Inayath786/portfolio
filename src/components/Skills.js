import React from "react";

function Skills() {
  const skillsStyle = {
    padding: "60px 20px",
    background: "#f5f5f5",
    textAlign: "center",
    animation: "fadeUp 1s ease"
  };

  const headingStyle = { fontSize: "36px", marginBottom: "20px" };
  const listStyle = { listStyle: "none", padding: "0", display: "flex", flexWrap: "wrap", justifyContent: "center" };
  const itemStyle = {
    fontSize: "18px",
    margin: "10px 20px",
    background: "white",
    padding: "15px 25px",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s"
  };

  return (
    <section id="skills" style={skillsStyle}>
      <h2 style={headingStyle}>💡 Skills</h2>
      <ul style={listStyle}>
        <li style={itemStyle}>⚛ React.js</li>
        <li style={itemStyle}>🖥 Node.js, Express.js</li>
        <li style={itemStyle}>📦 MongoDB</li>
        <li style={itemStyle}>☁ AWS (EC2, S3, Lambda)</li>
        <li style={itemStyle}>🐙 Git, GitHub</li>
        <li style={itemStyle}>🌍⚙️ Terraform</li>
        <li style={itemStyle}>👷‍♂️🤖 Jenkins</li>
        <li style={itemStyle}>🐳📦 Docker</li>
        <li style={itemStyle}>☸️🧭 Kubernetes</li>
        <li style={itemStyle}>🏗️🧩 System Designing</li>
      </ul>
    </section>
  );
}

export default Skills;

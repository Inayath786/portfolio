import React from "react";

function Certifications() {
  const sectionStyle = {
    padding: "60px 20px",
    background: "#f9f9f9",
    textAlign: "center"
  };

  const titleStyle = { fontSize: "36px", marginBottom: "30px" };
  const certStyle = { fontSize: "20px", margin: "15px 0" };

  return (
    <section id="certifications" style={sectionStyle}>
      <h2 style={titleStyle}>📜 Certifications</h2>
      <p style={certStyle}>☁️ AWS Devops Certification in <strong>Vcube Software Solutions HYDERABAD from june to sept 2025</strong></p>
      <p style={certStyle}>Mern Stack Development in <strong>Data Valley.ai VIZAG </strong></p>
     
    </section>
  );
}

export default Certifications;

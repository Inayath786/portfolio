import React from "react";

function About() {
  const aboutStyle = {
    padding: "60px 20px",
    background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
    textAlign: "center",
    animation: "fadeIn 1.2s ease-in"
  };

  const headingStyle = {
    fontSize: "36px",
    marginBottom: "20px",
    color: "#333"
  };

  const textStyle = {
    fontSize: "18px",
    lineHeight: "1.8",
    maxWidth: "800px",
    margin: "0 auto",
    color: "#444"
  };

  const highlight = {
    color: "#2a5298",
    fontWeight: "bold"
  };

  return (
    <section id="about" style={aboutStyle}>
      <h2 style={headingStyle}>🙋‍♂️ About Me</h2>
      <p style={textStyle}>
        Hi, I'm <span style={highlight}>Inayath Arifa</span>, a passionate{" "}
        <span style={highlight}>Full Stack Developer</span> 💻 and{" "}
        <span style={highlight}>AWS DevOps Engineer</span> ☁ with a strong
        interest in building scalable, efficient, and secure applications.  
      </p>
      <p style={textStyle}>
        I specialize in{" "}
        <span style={highlight}>MERN stack development</span> (MongoDB,
        Express.js, React.js, Node.js) and enjoy designing modern,
        user-friendly interfaces 🎨.  
      </p>
      <p style={textStyle}>
        Alongside development, I work with{" "}
        <span style={highlight}>AWS cloud services</span> (EC2, S3, Lambda,
        RDS, CloudFront, Auto Scaling, Load Balancers) to deploy and manage
        applications in a secure and scalable way 🚀.
      </p>
      <p style={textStyle}>
        I also have a strong foundation in{" "}
        <span style={highlight}>System Design & Architecture</span> 🏗,
        covering concepts like{" "}
        <span style={highlight}>scaling, caching, databases, replication,
        sharding, and event-driven design</span>.
      </p>
      <p style={textStyle}>
        My ultimate goal is to become a{" "}
        <span style={highlight}>high-impact software engineer</span> 🎯,
        solving real-world problems and continuously growing in both technical
        and leadership skills.
      </p>
    </section>
  );
}

export default About;

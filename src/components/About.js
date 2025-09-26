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
<h2 style={headingStyle}>🙋‍♀️ About Me</h2>
<p style={textStyle}>
I am <span style={highlight}>Samyukta</span>, a <span style={highlight}>B.Tech graduate</span> in <span style={highlight}>Electronics and Communication Engineering</span>, currently training in <span style={highlight}>Embedded Systems</span> at <span style={highlight}>Vector Institute of Technology</span>. Skilled in <span style={highlight}>ARM architecture</span> and <span style={highlight}>C programming</span>, I am passionate about creating <span style={highlight}>efficient embedded solutions</span> and applying my knowledge to <span style={highlight}>real-world projects</span>.
</p>
</section>
);
}


export default About;
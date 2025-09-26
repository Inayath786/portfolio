import React from "react";

function Contact() {
  const sectionStyle = {
    padding: "50px",
    background: "#f5f7fa",
    textAlign: "center"
  };

  const buttonStyle = {
    padding: "12px 25px",
    background: "#1e90ff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px"
  };

  const handleSendMessage = () => {
    const email = "inayatharifa@gmail.com";
    const subject = encodeURIComponent("Contact From Portfolio");
    const body = encodeURIComponent("Hello, I would like to connect with you.");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section style={sectionStyle}>
      <h2>📩 Contact Me</h2>
      <p>If you want to get in touch, click the button below:</p>
      <button style={buttonStyle} onClick={handleSendMessage}>
        Send Message
      </button>
    </section>
  );
}

export default Contact;

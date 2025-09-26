import React from "react";

function Projects() {
  const sectionStyle = {
    padding: "60px 20px",
    background: "#f5f7fa",
    textAlign: "center"
  };

  const headingStyle = {
    fontSize: "36px",
    marginBottom: "40px",
    fontWeight: "bold",
    color: "#2c3e50"
  };

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px"
  };

  const cardStyle = {
    padding: "20px",
    width: "320px",
    borderRadius: "15px",
    background: "white",
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    textAlign: "left",
    position: "relative"
  };

  const cardHover = {
    transform: "translateY(-10px)",
    boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
  };

  const titleStyle = { color: "#1e90ff", marginBottom: "10px" };
  const descStyle = { fontSize: "15px", lineHeight: "1.6", color: "#555" };
  const badgeStyle = {
    display: "inline-block",
    background: "#e0f7fa",
    color: "#00796b",
    padding: "4px 10px",
    borderRadius: "12px",
    fontSize: "12px",
    margin: "4px 4px 4px 0"
  };
  const linkStyle = {
    margin: "5px",
    color: "#1e90ff",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s"
  };

  const projectData = [
    {
      title: "🩺 Doctor-Patient Management System",
      description: `A scalable full-stack MERN application for healthcare workflows. Implements RESTful APIs, JWT authentication, and role-based access. Features appointment booking, slot management, and secure payment integration.`,
      badges: ["MERN Stack", "REST API", "JWT", "CRUD", "Responsive UI"],
      github: "#",
      demo: "#"
    },
    {
      title: "📝 Blog App",
      description: `React-based blogging platform featuring insightful content on programming concepts. Implements reusable components, responsive design, and SEO optimization.`,
      badges: ["React.js", "Responsive Design", "SEO"],
      github: "https://github.com/Inayath786/blog-app",
      demo: "http://inayathwrites.space"
    },
    {
      title: "💰 Expense Tracker",
      description: `Full-stack expense management app built with MERN stack. Implements secure authentication, CRUD operations, and optimized database queries for personal finance tracking.`,
      badges: ["MERN Stack", "CRUD", "JWT", "MongoDB"],
      github: "https://github.com/Inayath786/expense-tracker",
      demo: "#"
    },
    {
      title: "📈 AI Integrated Stock Analysis App",
      description: `AI-powered stock analysis platform integrating real-time data with predictive analytics. Features algorithmic insights and technical chart visualizations using Supertrend, MACD, and VWAP indicators.`,
      badges: ["React.js", "Node.js", "AI/ML", "Predictive Analytics"],
      github: "#",
      demo: "#"
    },
    {
      title: "🍽️ Zomato System Architecture",
      description: `Microservices-based scalable architecture with independent services for restaurant, order, reviews, and notifications. Includes API-driven communication, containerization with Docker, and orchestration with Kubernetes.`,
      badges: ["Microservices", "Docker", "Kubernetes", "System Design"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" style={sectionStyle}>
      <h2 style={headingStyle}>📚 Projects</h2>
      <div style={gridStyle}>
        {projectData.map((project, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style = { ...cardStyle, ...cardHover })}
            onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
          >
            <h3 style={titleStyle}>{project.title}</h3>
            <p style={descStyle}>{project.description}</p>
            <div>
              {project.badges.map((badge, i) => (
                <span key={i} style={badgeStyle}>{badge}</span>
              ))}
            </div>
            <div style={{ marginTop: "15px" }}>
              <a style={linkStyle} href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
              <a style={linkStyle} href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

"use client";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Xipetech Technologies Pvt. Ltd.",
      role: "Software Engineer (Full-Stack)",
      duration: "Mar 2025 – Feb 2026",
      points: [
        "Built modular microservices using NestJS and Docker",
        "Improved deployment speed by 30%",
        "Implemented CI/CD pipelines using GitHub Actions",
        "Developed real-time systems using Socket.io and Redis",
      ],
    },
    {
      company: "Jamtech Technologies Pvt. Ltd.",
      role: "Software Engineer (Full-Stack)",
      duration: "Aug 2023 – Mar 2025",
      points: [
        "Developed REST APIs serving 10K+ active users",
        "Integrated Stripe for secure online payments",
        "Built MERN-based e-commerce modules",
        "Optimized database queries using Sequelize ORM",
      ],
    },
     {
    company: "Wire-Wings Pvt. Ltd.",
    role: "Software Engineer Intern",
    duration: "Jan 2023 – Jul 2023",
    points: [
      "Assisted in building responsive UI using React-Redux",
      "Worked on backend APIs using Express.js",
      "Collaborated with senior developers in Agile environment",
      "Contributed to debugging and performance improvements",
    ],
  },
  ];

  return (
    <section id="experience" style={{ padding: "5rem 0", background: "#f9fafb" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>Work Experience</h2>
        <p style={{ color: "#6b7280" }}>
          My professional journey and company experience
        </p>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
        {/* Vertical Line */}
        <div
          style={{
            position: "absolute",
            left: "20px",
            top: 0,
            bottom: 0,
            width: "3px",
            background: "#3b82f6",
          }}
        ></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{
              marginLeft: "60px",
              marginBottom: "3rem",
              background: "#ffffff",
              padding: "1.5rem 2rem",
              borderRadius: "12px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "12px",
                width: "16px",
                height: "16px",
                background: "#3b82f6",
                borderRadius: "50%",
                marginTop: "10px",
              }}
            ></div>

            <h3 style={{ marginBottom: "0.3rem" }}>{exp.company}</h3>
            <p style={{ fontWeight: "600" }}>
              {exp.role} <span style={{ color: "#6b7280" }}>| {exp.duration}</span>
            </p>

            <ul style={{ marginTop: "1rem", color: "#374151" }}>
              {exp.points.map((point, i) => (
                <li key={i} style={{ marginBottom: "0.5rem" }}>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
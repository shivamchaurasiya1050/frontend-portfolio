import { motion } from "framer-motion";

export default function AboutSection({ about }) {
  return (
    <section id="about" className="container">
      <div className="section-title">
        <h2>About Me</h2>
        <p>
          I am a passionate Full Stack Developer with over 2 years of experience
          in building scalable and high-performance web applications. I
          specialize in Node.js, NestJS, React, and Next.js, with strong
          expertise in designing RESTful APIs and real-time systems. I have
          worked on complex projects including e-commerce platforms, real estate
          portals, and real-time chat applications. My focus is on writing
          clean, maintainable code and delivering optimized solutions that solve
          real-world problems. I am continuously learning and exploring advanced
          technologies like microservices architecture, DevOps, and performance
          optimization to enhance my development skills.Explore my journey,
          experience, and the skills that shape my work as a developer.
        </p>
      </div>
      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          {/* about?.photoUrl  */}
          <img
            src={"/profile.jpeg"}
            alt="Profile"
            className="profile-img"
          />
        </div>
        <div>
          <h3>{about.headline || "Hello! I'm Shivam"}</h3>
          <p>{about.description || "Dedicated web developer..."}</p>
          <div style={{ marginTop: "2rem" }}>
            <h4>Personal Information</h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <div>
                <strong>Name:</strong> {about.name || "Shivam Chaurasiya"}
              </div>
              <div>
                <strong>Email:</strong> {about.email || "shivam@example.com"}
              </div>
              <div>
                <strong>Location:</strong> {about.location || "India"}
              </div>
              <div>
                <strong>Status:</strong> {about.status || "Available for work"}
              </div>
            </div>
          </div>
          <a
            href="/shivam_chaurasiya_mern_stack_2026.pdf"
            download
            className="btn"
            style={{ marginTop: "1rem" }}
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}

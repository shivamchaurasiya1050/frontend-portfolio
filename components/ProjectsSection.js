import { motion } from 'framer-motion';

export default function ProjectsSection({ projects }) {
    return (
        <section id="projects" className="container">
            <div className="section-title">
                <h2>My Projects</h2>
               <p>Production-ready full-stack applications built with modern technologies and scalable architecture.</p>
            </div>
            <motion.div className="projects-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-img">
                            <img src={project.image || 'https://via.placeholder.com/300'} alt={project.title} />
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href={project.liveDemo} className="btn" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Live Demo</a>
                                <a href={project.github} className="btn" style={{ padding: '8px 16px', fontSize: '0.9rem', background: 'transparent', color: 'var(--primary)', border: '1px solid var(--primary)' }}>GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
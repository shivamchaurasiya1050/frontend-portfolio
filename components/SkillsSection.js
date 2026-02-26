import { motion } from 'framer-motion';

export default function SkillsSection({ skills }) {
    return (
        <section id="skills" style={{ background: 'var(--light)' }}>
            <div className="container">
                <div className="section-title">
                    <h2>My Skills</h2>
                <p>Full-stack technologies and tools I use to build scalable, high-performance applications.</p>
                </div>
                <motion.div className="skills-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                    {skills.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3>{category.category}</h3>
                            {category.skills.map((skill, i) => (
                                <div key={i} className="skill-item">
                                    <span>{skill.name}</span>
                                    <div className="skill-bar">
                                        <motion.div
                                            className="skill-level"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1 }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
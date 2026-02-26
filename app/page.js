'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import ExperienceSection from '../components/ExperienceSection';

export default function Home() {
    const [data, setData] = useState({ about: {}, skills: [], projects: [], testimonials: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [aboutRes, skillsRes, projectsRes, testimonialsRes] = await Promise.all([
                    fetch('https://backend-portfolio-h4s3.onrender.com/api/data/about'),
                    fetch('https://backend-portfolio-h4s3.onrender.com/api/data/skills'),
                    fetch('https://backend-portfolio-h4s3.onrender.com/api/data/projects'),
                    fetch('https://backend-portfolio-h4s3.onrender.com/api/data/testimonials'),
                ]);
                const [about, skills, projects, testimonials] = await Promise.all([
                    aboutRes.json(),
                    skillsRes.json(),
                    projectsRes.json(),
                    testimonialsRes.json(),
                ]);
                setData({ about, skills, projects, testimonials });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <main>
            <Hero />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <AboutSection about={data.about} />
                <ExperienceSection />
                <SkillsSection skills={data.skills} />
                <ProjectsSection projects={data.projects} />
                <TestimonialsSection testimonials={data.testimonials} />
                <ContactSection />
            </motion.div>
        </main>
    );
}
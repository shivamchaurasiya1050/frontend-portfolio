'use client';

import { useState } from 'react';

export default function AdminPanel() {
    const [token, setToken] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [about, setAbout] = useState({
        name: '',
        headline: '',
        description: '',
        email: '',
        location: '',
        status: '',
        photoUrl: '',
    });

    const [skillCategory, setSkillCategory] = useState('');
    const [skillsText, setSkillsText] = useState(); // raw JSON input
    const [skills, setSkills] = useState();           // parsed array

    const [project, setProject] = useState({
        title: '',
        description: '',
        tech: [],
        liveDemo: '',
        github: '',
        image: '',
    });

    const [testimonial, setTestimonial] = useState({ quote: '', author: '' });

    // -------------------- LOGIN --------------------
    const login = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await res.json();
            if (data.token) {
                setToken(data.token);
            } else {
                alert('Login failed: Invalid credentials');
            }
        } catch (error) {
            alert('Error logging in: ' + error.message);
        }
    };

    // -------------------- UPDATE ABOUT --------------------
    const updateAbout = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/data/about', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(about),
            });
            if (res.ok) alert('About section updated');
            else alert('Failed to update About');
        } catch (error) {
            alert('Error updating About: ' + error.message);
        }
    };

    // -------------------- ADD SKILLS --------------------
    const addSkill = async (e) => {
        e.preventDefault();
        try {
            console.log(skillsText)
            const parsedSkills = JSON.parse(skillsText);

            if (!Array.isArray(parsedSkills)) {
                alert('Skills must be an array');
                return;
            }

            const res = await fetch('http://localhost:5000/api/data/skills', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ category: skillCategory, skills: parsedSkills }),
            });

            if (res.ok) {
                alert('Skills updated');
                setSkillCategory('');
                setSkills();
                setSkillsText();
            } else {
                alert('Failed to update Skills');
            }
        } catch (error) {
            console.log(error)
            alert('Invalid JSON format for skills');
        }
    };

    // -------------------- ADD PROJECT --------------------
    const addProject = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/data/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(project),
            });
            if (res.ok) {
                alert('Project added');
                setProject({ title: '', description: '', tech: [], liveDemo: '', github: '', image: '' });
            } else {
                alert('Failed to add Project');
            }
        } catch (error) {
            alert('Error adding Project: ' + error.message);
        }
    };

    // -------------------- ADD TESTIMONIAL --------------------
    const addTestimonial = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/data/testimonials', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(testimonial),
            });
            if (res.ok) {
                alert('Testimonial added');
                setTestimonial({ quote: '', author: '' });
            } else {
                alert('Failed to add Testimonial');
            }
        } catch (error) {
            alert('Error adding Testimonial: ' + error.message);
        }
    };

    // -------------------- LOGIN SCREEN --------------------
    if (!token) {
        return (
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                <h3>Admin Login</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />
                </div>
                <button className="btn" onClick={login}>
                    Login
                </button>
            </div>
        );
    }

    // -------------------- MAIN ADMIN PANEL --------------------
    return (
        <div style={{ display: 'grid', gap: '2rem' }}>
            {/* Update About */}
            <form onSubmit={updateAbout}>
                <h3>Update About</h3>
                {Object.keys(about).map((key) => (
                    <div className="form-group" key={key}>
                        <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                        {key === 'description' ? (
                            <textarea
                                value={about[key]}
                                onChange={(e) => setAbout({ ...about, [key]: e.target.value })}
                                placeholder={key}
                            />
                        ) : (
                            <input
                                value={about[key]}
                                onChange={(e) => setAbout({ ...about, [key]: e.target.value })}
                                placeholder={key}
                            />
                        )}
                    </div>
                ))}
                <button type="submit" className="btn">
                    Update About
                </button>
            </form>

            {/* Add/Update Skills */}
            <form onSubmit={addSkill}>
                <h3>Add/Update Skills</h3>
                <div className="form-group">
                    <label>Category</label>
                    <input
                        value={skillCategory}
                        onChange={(e) => setSkillCategory(e.target.value)}
                        placeholder="e.g., Frontend Development"
                    />
                </div>
                <div className="form-group">
                    <label>Skills JSON format</label>
                    <textarea
                        value={skillsText}
                        onChange={(e) => setSkillsText(e.target.value)}
                        placeholder='[{"name": "HTML/CSS", "level": 90}]'
                        rows={5}
                    />
                </div>
                <button type="submit" className="btn">
                    Add Skills
                </button>
            </form>

            {/* Add Project */}
            <form onSubmit={addProject}>
                <h3>Add Project</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        value={project.title}
                        onChange={(e) => setProject({ ...project, title: e.target.value })}
                        placeholder="E-Commerce Website"
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        value={project.description}
                        onChange={(e) => setProject({ ...project, description: e.target.value })}
                        placeholder="A fully functional platform..."
                    />
                </div>
                <div className="form-group">
                    <label>Tech (comma-separated)</label>
                    <input
                        value={project.tech.join(',')}
                        onChange={(e) =>
                            setProject({ ...project, tech: e.target.value.split(',').map((t) => t.trim()) })
                        }
                        placeholder="React,Node.js,MongoDB"
                    />
                </div>
                <div className="form-group">
                    <label>Live Demo URL</label>
                    <input
                        value={project.liveDemo}
                        onChange={(e) => setProject({ ...project, liveDemo: e.target.value })}
                        placeholder="https://..."
                    />
                </div>
                <div className="form-group">
                    <label>GitHub URL</label>
                    <input
                        value={project.github}
                        onChange={(e) => setProject({ ...project, github: e.target.value })}
                        placeholder="https://github.com/..."
                    />
                </div>
                <div className="form-group">
                    <label>Image URL</label>
                    <input
                        value={project.image}
                        onChange={(e) => setProject({ ...project, image: e.target.value })}
                        placeholder="https://via.placeholder.com/300"
                    />
                </div>
                <button type="submit" className="btn">
                    Add Project
                </button>
            </form>

            {/* Add Testimonial */}
            <form onSubmit={addTestimonial}>
                <h3>Add Testimonial</h3>
                <div className="form-group">
                    <label>Quote</label>
                    <textarea
                        value={testimonial.quote}
                        onChange={(e) => setTestimonial({ ...testimonial, quote: e.target.value })}
                        placeholder="Shivam's work transformed our business..."
                    />
                </div>
                <div className="form-group">
                    <label>Author</label>
                    <input
                        value={testimonial.author}
                        onChange={(e) => setTestimonial({ ...testimonial, author: e.target.value })}
                        placeholder="John Doe, CEO"
                    />
                </div>
                <button type="submit" className="btn">
                    Add Testimonial
                </button>
            </form>
        </div>
    );
}

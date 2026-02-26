'use client';

import { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = 'Valid email is required';
        if (!formData.subject) newErrors.subject = 'Subject is required';
        if (!formData.message) newErrors.message = 'Message is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                setLoading(true);
                setSuccess('');

                const res = await fetch('https://backend-portfolio-h4s3.onrender.com/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                const data = await res.json();

                if (res.ok) {
                    setSuccess('Message sent successfully ✅');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                } else {
                    setSuccess(data.message || 'Something went wrong ❌');
                }
            } catch (error) {
                setSuccess('Server error ❌');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <section id="contact" style={{ background: 'var(--light)' }}>
            <div className="container">
                <div className="section-title">
                    <h2>Get In Touch</h2>
                    <p>Looking for full-time opportunities where I can contribute, grow, and build scalable digital solutions.</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <div className="contact-item"><strong>Email:</strong> shivamchaurasiya1050@gmail.com</div>
                        <div className="contact-item"><strong>Phone:</strong> +91 8052355141</div>
                        <div className="contact-item"><strong>Location:</strong> India, Lucknow</div>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/shivam-chaurasiya-98ba14233/" target="_blank">LinkedIn</a>
                            <a href="https://github.com/shivamchaurasiya1050" target="_blank">GitHub</a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Your Name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className={errors.name ? 'error' : ''}
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label>Your Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label>Subject</label>
                            <input
                                type="text"
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                className={errors.subject ? 'error' : ''}
                            />
                            {errors.subject && <span className="error-message">{errors.subject}</span>}
                        </div>

                        <div className="form-group">
                            <label>Your Message</label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className={errors.message ? 'error' : ''}
                            />
                            {errors.message && <span className="error-message">{errors.message}</span>}
                        </div>

                        <button type="submit" className="btn" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>

                        {success && (
                            <p style={{ marginTop: '1rem', color: 'green' }}>
                                {success}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
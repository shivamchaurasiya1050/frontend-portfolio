import { motion } from 'framer-motion';

export default function TestimonialsSection({ testimonials }) {
    return (
        <section id="testimonials" style={{ background: 'var(--light)' }}>
            <div className="container">
                <div className="section-title">
                    <h2>Testimonials</h2>
                    <p>What teammates and leaders say about my work</p>
                </div>
                <motion.div className="testimonials-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <p>{testimonial.quote}</p>
                            <span className="testimonial-author">{testimonial.author}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
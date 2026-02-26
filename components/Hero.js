'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Hero() {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ['Web Developer', 'MERN Developer', 'Problem Solver', 'Expressjs Developer', 'Reactjs Developer', 'Nodejs Developer'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
        });
        return () => typed.destroy();
    }, []);

    return (
        <section id="home" className="hero">
            <div className="container">
                <h1>Hi, I'm Shivam Chaurasiya</h1>
                <p>I'm a <span ref={typedRef} className="typed-text"></span></p>
                <p>I build scalable, high-performance web applications with modern technologies like Node.js, React, and Docker.</p>
                <a href="#contact" className="btn">Get In Touch</a>
                <a href="#projects" className="btn" style={{ background: 'transparent', border: '2px solid white', marginLeft: '1rem' }}>View My Work</a>
            </div>
        </section>
    );
}
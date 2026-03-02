import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <span className="navbar-logo" onClick={() => scrollToSection('hero')}>
                    MY PORTFOLIO<span className="logo-dot"></span>
                </span>
                
                <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                    <span onClick={() => scrollToSection('about')}>ABOUT</span>
                    <span onClick={() => scrollToSection('projects')}>WORK</span>
                    <span onClick={() => scrollToSection('contact')}>CONTACT</span>
                </div>

                <button className="resume-btn" onClick={() => window.open('#', '_blank')}>
                    RESUME
                </button>

                <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
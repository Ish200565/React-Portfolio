import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const goToHome = () => {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMenuOpen(false);
    };

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMenuOpen(false);
    };

    const openCredentials = () => {
        scrollToSection('credentials');
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <span className="navbar-logo" onClick={goToHome}>
                    MY PORTFOLIO<span className="logo-dot"></span>
                </span>
                
                <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                    <span onClick={() => scrollToSection('about')}>ABOUT</span>
                    <span onClick={() => scrollToSection('experience')}>EXPERIENCE</span>
                    <span onClick={() => scrollToSection('projects')}>PROJECTS</span>
                    <span onClick={() => scrollToSection('coding-stats')}>CODING STATS</span>
                    <span onClick={openCredentials}>CREDENTIALS</span>
                    <span onClick={() => scrollToSection('contact')}>CONTACT</span>
                    <button className="mobile-resume-btn" onClick={() => window.open('/Res_Ishika_Belel.pdf', '_blank')}>
                        RESUME
                    </button>
                </div>

                <div className="navbar-actions">
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                        {isDark ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="5"/>
                                <line x1="12" y1="1" x2="12" y2="3"/>
                                <line x1="12" y1="21" x2="12" y2="23"/>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                                <line x1="1" y1="12" x2="3" y2="12"/>
                                <line x1="21" y1="12" x2="23" y2="12"/>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                            </svg>
                        )}
                    </button>
                    <button className="resume-btn" onClick={() => window.open('/Res_Ishika_Belel.pdf', '_blank')}>
                        RESUME
                    </button>
                </div>

                <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {/* Mobile theme toggle */}
            <button className="theme-toggle mobile-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {isDark ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="5"/>
                        <line x1="12" y1="1" x2="12" y2="3"/>
                        <line x1="12" y1="21" x2="12" y2="23"/>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                        <line x1="1" y1="12" x2="3" y2="12"/>
                        <line x1="21" y1="12" x2="23" y2="12"/>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                )}
            </button>
        </nav>
    );
};

export default Navbar;
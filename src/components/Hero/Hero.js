import React, { useState, useEffect } from 'react';
import './Hero.css';
import FaultyTerminal from './FaultyTerminal';
import ProfileCard from './ProfileCard';
import { useTheme } from '../../context/ThemeContext';

const HERO_TITLES = [
    'BACKEND DEVELOPER WITH AI/ML EXPERTISE',
    'RAG & REST API SPECIALIST',
    'BACKEND & CLOUD ENGINEER'
];

const HERO_GRID_MUL = [2, 1];

const Hero = () => {
    const { isDark } = useTheme();
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isLowPowerDevice, setIsLowPowerDevice] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 900px), (pointer: coarse), (prefers-reduced-motion: reduce)');
        const updateDeviceMode = () => setIsLowPowerDevice(mediaQuery.matches);

        updateDeviceMode();
        mediaQuery.addEventListener('change', updateDeviceMode);

        return () => mediaQuery.removeEventListener('change', updateDeviceMode);
    }, []);

    useEffect(() => {
        const currentTitle = HERO_TITLES[currentTitleIndex];
        
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText !== currentTitle) {
                    setDisplayText(currentTitle.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText !== '') {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentTitleIndex((prev) => (prev + 1) % HERO_TITLES.length);
                }
            }
        }, isDeleting ? 40 : 80);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentTitleIndex]);

    return (
        <section className={`hero ${isLowPowerDevice ? 'hero-static' : ''}`} id="hero">
            <div className="hero-background">
                {!isLowPowerDevice && (
                    <FaultyTerminal
                        scale={1.5}
                        gridMul={HERO_GRID_MUL}
                        digitSize={1.7}
                        timeScale={0.5}
                        pause={false}
                        scanlineIntensity={0.5}
                        glitchAmount={1}
                        flickerAmount={0}
                        noiseAmp={1}
                        chromaticAberration={0}
                        dither={0}
                        curvature={0.1}
                        tint={isDark ? '#3d9c30' : '#c4ddbf'}
                        mouseReact
                        mouseStrength={0.5}
                        pageLoadAnimation
                        brightness={isDark ? 0.6 : 0.38}
                        background={isDark ? '#000000' : '#f3f6f1'}
                    />
                )}
            </div>
            
            <div className="hero-main">
                <div className="hero-image-section">
                    <ProfileCard
                        avatarUrl="/avatar.gif"
                        handle="Ish200565"
                    />
                </div>

                <div className="hero-content">
                    <p className="hero-greeting">&gt; Initializing System...</p>
                    <h1 className="hero-name animate-name">ISHIKA BELEL</h1>
                    <div className="hero-title-wrapper">
                        <span className="hero-title">{displayText}</span>
                        <span className="cursor">|</span>
                    </div>
                    <p className="hero-description">
                        Final-year Computer Science Engineering student building scalable backend systems and AI-powered solutions.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                            View My Projects
                        </button>
                        <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
};

export default Hero;

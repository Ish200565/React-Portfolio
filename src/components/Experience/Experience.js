import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: 'Web Development Intern',
            company: 'Happieloop Technologies',
            period: 'Oct 2025 – Dec 2025',
            badge: 'Internship',
            highlights: [
                'Integrated frontend interfaces with 15+ secure REST APIs using Node.js and Express, optimizing data flow patterns and reducing API payload delivery latency by 15%.',
                'Coordinated within an agile engineering squad utilizing structured Git workflows and rigorous code reviews to ship 3+ product modules ahead of production deadlines.'
            ],
            tech: ['Node.js', 'Express.js', 'REST APIs', 'Git Workflows', 'Agile / Code Reviews']
        }
    ];

    return (
        <section className="experience" id="experience">
            <div className="experience-container">
                <h2 className="section-title">
                    WORK <span className="highlight">EXPERIENCE</span>
                </h2>

                <div className="timeline-wrapper">
                    {experiences.map((exp, index) => (
                        <div className="timeline-card" key={index}>
                            <div className="card-header">
                                <div className="header-main">
                                    <h3 className="role-title">{exp.role}</h3>
                                    <span className="company-name">@ {exp.company}</span>
                                </div>
                                <div className="header-meta">
                                    <span className="period-badge">{exp.period}</span>
                                    <span className="type-badge">{exp.badge}</span>
                                </div>
                            </div>

                            <ul className="highlights-list">
                                {exp.highlights.map((item, i) => (
                                    <li key={i} className="highlight-item">
                                        <span className="bullet-prompt">&gt;</span>
                                        <p>{item}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className="experience-tech">
                                {exp.tech.map((t, i) => (
                                    <span key={i} className="exp-tech-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

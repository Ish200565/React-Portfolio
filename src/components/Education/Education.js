import React from 'react';
import './Education.css';

const Education = () => {
    const educationList = [
        {
            institution: 'Universal College of Engineering',
            degree: 'Bachelor of Engineering (BE) in Computer Science',
            period: '2023 – 2027',
            grade: 'CGPA: 9.48',
            highlight: 'Top Academic Performer',
            details: 'Specialization in Backend Systems, Database Architectures, Data Structures & Algorithms, and AI/ML Model Integration.'
        },
        {
            institution: 'Mithibai College',
            degree: 'Higher Secondary Certificate (HSC), Science (PCMB)',
            period: '2021 – 2023',
            grade: 'Score: 71%',
            details: 'Core focus on Physics, Chemistry, Mathematics, and Biology (PCMB).'
        },
        {
            institution: 'St. Soldier Public School',
            degree: 'Secondary School Certificate (SSC)',
            period: '2021',
            grade: 'Score: 91.20%',
            highlight: 'Distinction',
            details: 'Strong foundational academics in science and mathematics.'
        }
    ];

    return (
        <section className="education" id="education">
            <div className="education-container">
                <h2 className="section-title">
                    ACADEMIC <span className="highlight">EDUCATION</span>
                </h2>

                <div className="education-cards">
                    {educationList.map((edu, index) => (
                        <div className="edu-card" key={index}>
                            <div className="edu-header">
                                <div className="edu-title-group">
                                    <h3 className="edu-institution">{edu.institution}</h3>
                                    <p className="edu-degree">{edu.degree}</p>
                                </div>
                                <div className="edu-meta">
                                    <span className="edu-period">{edu.period}</span>
                                    <span className="edu-grade">{edu.grade}</span>
                                </div>
                            </div>
                            <p className="edu-details">{edu.details}</p>
                            {edu.highlight && (
                                <span className="edu-highlight-tag">⭐ {edu.highlight}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

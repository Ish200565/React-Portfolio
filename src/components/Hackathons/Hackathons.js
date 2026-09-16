import React from 'react';
import './Hackathons.css';

const Hackathons = () => {
    const hackathons = [
        {
            title: 'Smart India Hackathon 2026',
            level: 'National Level',
            badge: '5+ Hackathons',
            projectName: 'FLOATCHAT',
            description: 'Platform to optimize public ocean data access frameworks, building efficient backend pipelines for marine dataset querying and real-time retrieval.',
            tags: ['Backend', 'Ocean Data APIs', 'RAG / Data Access', 'National Hackathon'],
            status: 'Featured'
        },
        {
            title: 'Hack With Mumbai 2.0',
            level: 'Regional / City Hackathon',
            badge: 'Healthcare AI',
            projectName: 'MammoCheck',
            description: 'A deep learning diagnostic system to evaluate breast cancer tissue density from medical scans with high precision and automated reporting.',
            tags: ['Deep Learning', 'PyTorch / Computer Vision', 'Healthcare Tech', 'Diagnostic AI'],
            status: 'Featured'
        },
        {
            title: 'National Level AI Hackathon',
            level: 'National Sprint',
            badge: 'Attended',
            projectName: 'Smart AI Innovation',
            description: 'Built a rapid prototype during an intensive 24-hour sprint focusing on automated query resolution and RESTful API integration.',
            tags: ['AI Integration', 'FastAPI', 'Sprint Build', 'Hackathon Participant'],
            status: 'Attended'
        },
        {
            title: 'State Level Tech Sprint',
            level: 'State Level',
            badge: 'Attended',
            projectName: 'Rapid Prototype Challenge',
            description: 'Architected scalable microservices and backend database schemas under strict time constraints for smart city data visualization.',
            tags: ['PostgreSQL', 'Node.js', 'System Architecture'],
            status: 'Attended'
        },
        {
            title: 'Open Source Community Hackathon',
            level: 'Community Hackathon',
            badge: 'Attended',
            projectName: 'Collaborative API Build',
            description: 'Contributed open-source backend endpoints, documentation, and Git workflow optimization for community developer tooling.',
            tags: ['Git Workflows', 'REST Endpoints', 'Open Source'],
            status: 'Attended'
        }
    ];

    return (
        <section className="hackathons" id="hackathons">
            <div className="hackathons-container">
                <h2 className="section-title">
                    HACKATHONS <span className="highlight">(5+)</span>
                </h2>

                <div className="hackathons-grid">
                    {hackathons.map((hack, index) => (
                        <div className={`hackathon-card ${hack.status === 'Attended' ? 'attended' : ''}`} key={index}>
                            <div className="hackathon-card-header">
                                <span className="hackathon-level">{hack.level}</span>
                                <span className="hackathon-badge">{hack.badge}</span>
                            </div>
                            <h3 className="hackathon-title">{hack.title}</h3>
                            <div className="project-highlight">
                                <span className="proj-label">PROJECT:</span>
                                <span className="proj-name">{hack.projectName}</span>
                            </div>
                            <p className="hackathon-desc">{hack.description}</p>
                            <div className="hackathon-tags">
                                {hack.tags.map((t, i) => (
                                    <span key={i} className="hack-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hackathons;

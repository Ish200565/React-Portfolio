import React from 'react';
import './HackathonsCerts.css';

const HackathonsCerts = () => {
    const hackathons = [
        {
            title: 'Smart India Hackathon 2026',
            badge: 'National Level',
            projectName: 'FLOATCHAT',
            description: 'Platform to optimize public ocean data access frameworks, building high-efficiency backend pipelines for marine dataset querying & retrieval.',
            tags: ['Backend APIs', 'Ocean Datasets', 'RAG Frameworks', 'National Level']
        },
        {
            title: 'Hack With Mumbai 2.0',
            badge: 'Healthcare AI Track',
            projectName: 'MammoCheck',
            description: 'A deep learning diagnostic system to evaluate breast cancer tissue density from medical scans with high precision and automated reporting.',
            tags: ['Deep Learning', 'PyTorch', 'Computer Vision', 'Medical Diagnostics']
        },
        {
            title: "HackStomp '26",
            badge: 'AI Classroom Platform',
            projectName: 'EduAssess',
            description: 'Next-generation educational platform for real-time AI-driven assessment, gamified quizzes (FFF), Gemini AI voice sentiment analysis (TTS/STT), and guided AI concept mapping.',
            tags: ['React.js', 'Vite', 'Supabase Real-time', 'Google Gemini AI', 'Web Speech API']
        }
    ];

    const certifications = [
        {
            name: 'AICW SAP & Microsoft AI Certificate',
            issuer: 'Microsoft, Edunet Foundation & SAP India',
            domain: 'AI Careers for Women Program'
        },
        {
            name: 'Introduction to Cybersecurity',
            issuer: 'Cisco Networking Academy',
            domain: 'Cybersecurity Fundamentals'
        },
        {
            name: 'Introduction to Cloud Computing',
            issuer: 'Simplilearn SkillUp',
            domain: 'Cloud Infrastructure'
        },
        {
            name: 'JavaScript Bootcamp Certificate',
            issuer: 'LetsUpgrade / NSDC',
            domain: 'Frontend & JS Logic'
        },
        {
            name: 'MongoDB Developer Credentials',
            issuer: 'MongoDB University',
            domain: 'NoSQL Databases & Aggregations'
        },
        {
            name: 'HappieLoop Internship Certificate',
            issuer: 'Happieloop Technologies',
            domain: 'Web Development Internship'
        }
    ];

    const driveFolderUrl = 'https://drive.google.com/drive/u/0/folders/13zb9M1WRccZ0xuP3DFjv7Vd2xMQDFwRb';

    return (
        <section className="hackathons-certs" id="hackathons">
            <div className="hc-container">
                <h2 className="section-title">
                    HACKATHONS & <span className="highlight">CERTIFICATIONS</span>
                </h2>

                <div className="hc-grid">
                    {/* Left Column: Hackathons */}
                    <div className="hc-column hackathons-col">
                        <h3 className="hc-col-title">&gt; Hackathons & Competitions</h3>
                        <div className="hackathon-cards-list">
                            {hackathons.map((hack, index) => (
                                <div className="hc-card hack-card" key={index}>
                                    <div className="hc-card-header">
                                        <h4 className="hc-card-title">{hack.title}</h4>
                                        <span className="hc-badge">{hack.badge}</span>
                                    </div>
                                    <div className="hc-proj-banner">
                                        <span className="hc-proj-label">PROJECT:</span>
                                        <span className="hc-proj-name">{hack.projectName}</span>
                                    </div>
                                    <p className="hc-card-desc">{hack.description}</p>
                                    <div className="hc-tags">
                                        {hack.tags.map((t, i) => (
                                            <span key={i} className="hc-tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Certifications */}
                    <div className="hc-column certs-col">
                        <div className="certs-col-header">
                            <h3 className="hc-col-title">&gt; Verified Certifications</h3>
                            <a 
                                href={driveFolderUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="drive-btn"
                            >
                                📁 View Drive Folder ↗
                            </a>
                        </div>

                        <div className="certs-list">
                            {certifications.map((cert, index) => (
                                <div className="hc-card cert-item-card" key={index}>
                                    <div className="cert-left">
                                        <span className="cert-icon">📜</span>
                                        <div>
                                            <h4 className="cert-name">{cert.name}</h4>
                                            <span className="cert-issuer">{cert.issuer}</span>
                                        </div>
                                    </div>
                                    <span className="cert-domain-badge">{cert.domain}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HackathonsCerts;

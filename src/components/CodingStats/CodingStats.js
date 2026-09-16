import React from 'react';
import './CodingStats.css';

const CodingStats = () => {
    const stats = [
        {
            title: 'GitHub Commit Activity',
            metric: '230+ Contributions',
            subtext: 'Active open-source & private commit status in 2026',
            icon: '⌘',
            link: 'https://github.com/Ish200565',
            linkText: 'View GitHub Profile',
            badge: 'Active Committer'
        },
        {
            title: 'LeetCode Problem Solving',
            metric: '60+ Solved',
            subtext: 'Data Structures, Algorithms & Problem Solving',
            icon: '⚡',
            link: 'https://leetcode.com/u/Ish200565/',
            linkText: 'View LeetCode Profile',
            badge: 'DSA Enthusiast'
        }
    ];

    const certs = [
        {
            title: 'Backend Systems & REST API Engineering',
            issuer: 'Professional Certification',
            date: '2025 - 2026',
            description: 'Building JWT-secured RESTful services, database migrations, and microservice architectures.',
            verifyUrl: 'https://www.linkedin.com/in/ishika-belel-1669b12b7/'
        },
        {
            title: 'AI/ML Model Integration & RAG Pipelines',
            issuer: 'Specialization Credential',
            date: '2025 - 2026',
            description: 'Vector store embeddings with ChromaDB, LLM APIs (Groq/Gemini/OpenAI), and Hugging Face RoBERTa.',
            verifyUrl: 'https://www.linkedin.com/in/ishika-belel-1669b12b7/'
        },
        {
            title: 'Full Stack & Web Architecture',
            issuer: 'Happieloop Tech & Academic Projects',
            date: '2025',
            description: 'Node.js, Express, React, and Django production module delivery with 15% latency reduction.',
            verifyUrl: 'https://www.linkedin.com/in/ishika-belel-1669b12b7/'
        }
    ];

    return (
        <section className="coding-stats" id="coding-stats">
            <div className="stats-container">
                <h2 className="section-title">
                    CODING ACTIVITY & <span className="highlight">CERTIFICATIONS</span>
                </h2>

                <div className="stats-cards-grid">
                    {stats.map((item, index) => (
                        <div className="stat-card" key={index}>
                            <div className="stat-icon-wrapper">
                                <span className="stat-icon">{item.icon}</span>
                                <span className="stat-badge">{item.badge}</span>
                            </div>
                            <h3 className="stat-title">{item.title}</h3>
                            <div className="stat-metric">{item.metric}</div>
                            <p className="stat-subtext">{item.subtext}</p>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="stat-link-btn">
                                {item.linkText} <span>→</span>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="certifications-section">
                    <h3 className="sub-section-title">&gt; Verified Certifications & Credentials</h3>
                    <div className="certs-grid">
                        {certs.map((cert, index) => (
                            <div className="cert-card" key={index}>
                                <div className="cert-header">
                                    <h4 className="cert-title">{cert.title}</h4>
                                    <span className="cert-date">{cert.date}</span>
                                </div>
                                <span className="cert-issuer">{cert.issuer}</span>
                                <p className="cert-desc">{cert.description}</p>
                                <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="cert-verify-link">
                                    Verify Credential <span>↗</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodingStats;

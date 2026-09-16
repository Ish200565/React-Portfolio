import React from 'react';
import './About.css';

const About = () => {
    const skillDomains = [
        {
            category: 'Backend & APIs',
            icon: '⚙️',
            description: 'Production-ready REST APIs, microservices, authentication & real-time communication.',
            techs: ['Python', 'FastAPI', 'Flask', 'Django', 'REST APIs', 'JWT', 'RBAC', 'Node.js', 'Express.js', 'WebSockets']
        },
        {
            category: 'Databases & Storage',
            icon: '🗄️',
            description: 'Scalable relational & NoSQL schema design, query optimization & ORMs.',
            techs: ['PostgreSQL', 'MongoDB', 'SQLAlchemy', 'MySQL', 'SQLite', 'Prisma ORM', 'Neon Cloud DB']
        },
        {
            category: 'AI / ML & RAG Pipelines',
            icon: '🤖',
            description: 'Vector search, document intelligence, LLM orchestration & emotion analysis.',
            techs: ['RAG Pipelines', 'ChromaDB', 'Groq / Gemini APIs', 'PyTorch', 'TensorFlow', 'Hugging Face RoBERTa', 'OpenCV', 'NLP']
        },
        {
            category: 'Cloud & DevOps',
            icon: '☁️',
            description: 'Containerized deployment workflows, serverless functions & CI/CD pipelines.',
            techs: ['Docker', 'CI/CD (GitHub Actions)', 'AWS Fundamentals (Lambda/SES)', 'Vercel', 'Netlify', 'Git / GitHub']
        }
    ];

    return (
        <section className="about" id="about">
            <div className="about-container">
                <h2 className="section-title">
                    ABOUT <span className="highlight">ME</span>
                </h2>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Final-year Computer Science engineering student specializing in <strong>Backend Systems and AI/ML Integration</strong>. Skilled in architecting production-ready REST APIs, JWT authentication, scalable database schemas (PostgreSQL, MongoDB), and RAG/LLM-powered pipelines.<br/><br/>
                            Experienced across the entire server-side lifecycle—from low-latency API optimization and WebSockets to vector database retrieval (ChromaDB), OCR document scanning (Groq Vision), and cloud deployments (AWS, Neon, Vercel).
                        </p>
                    </div>
                </div>

                <div className="skills-grid">
                    {skillDomains.map((domain, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-header">
                                <span className="skill-icon">{domain.icon}</span>
                                <h4>{domain.category}</h4>
                            </div>
                            <p className="skill-desc">{domain.description}</p>
                            <div className="skill-techs">
                                {domain.techs.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;

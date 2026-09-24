import React from 'react';
import './About.css';
import Icon from '../Icon/Icon';
import TechLogo from './TechLogo';

const About = () => {
    const floatingTechs = [
        'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'PyTorch', 'Docker',
        'AWS Fundamentals (Lambda/SES)', 'Git / GitHub', 'TensorFlow', 'Node.js'
    ];

    const skillDomains = [
        {
            category: 'Backend & APIs',
            icon: 'settings',
            description: 'Production-ready REST APIs, microservices, authentication & real-time communication.',
            techs: ['Python', 'FastAPI', 'Flask', 'Django', 'REST APIs', 'JWT', 'RBAC', 'Node.js', 'Express.js', 'WebSockets']
        },
        {
            category: 'Databases & Storage',
            icon: 'database',
            description: 'Scalable relational & NoSQL schema design, query optimization & ORMs.',
            techs: ['PostgreSQL', 'MongoDB', 'SQLAlchemy', 'MySQL', 'SQLite', 'Prisma ORM', 'Neon Cloud DB']
        },
        {
            category: 'AI / ML & RAG Pipelines',
            icon: 'bot',
            description: 'Vector search, document intelligence, LLM orchestration & emotion analysis.',
            techs: ['RAG Pipelines', 'ChromaDB', 'Groq / Gemini APIs', 'PyTorch', 'TensorFlow', 'Hugging Face RoBERTa', 'OpenCV', 'NLP']
        },
        {
            category: 'Cloud & DevOps',
            icon: 'cloud',
            description: 'Containerized deployment workflows, serverless functions & CI/CD pipelines.',
            techs: ['Docker', 'CI/CD (GitHub Actions)', 'AWS Fundamentals (Lambda/SES)', 'Vercel', 'Netlify', 'Git / GitHub']
        }
    ];

    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="floating-tech-logos" aria-hidden="true">
                    {floatingTechs.map((tech, index) => (
                        <span
                            className={`floating-tech-logo floating-tech-logo-${index + 1}`}
                            key={tech}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <TechLogo name={tech} />
                        </span>
                    ))}
                </div>

                <h2 className="section-title">
                    ABOUT <span className="highlight">ME</span>
                </h2>

                <div className="terminal-window">
                    <div className="terminal-titlebar">
                        <div className="terminal-dots" aria-hidden="true">
                            <span className="terminal-dot terminal-dot-red"></span>
                            <span className="terminal-dot terminal-dot-yellow"></span>
                            <span className="terminal-dot terminal-dot-green"></span>
                        </div>
                        <span className="terminal-filename">ishika@portfolio: ~</span>
                    </div>

                    <div className="terminal-body">
                        <div className="terminal-line">
                            <span className="terminal-prompt">$ </span>
                            <span className="terminal-command">whoami</span>
                        </div>
                        <p className="terminal-output">
                            Ishika Belel — final-year CS student, backend-leaning, currently obsessed with RAG pipelines.
                        </p>

                        <div className="terminal-line terminal-command-line">
                            <span className="terminal-prompt">$ </span>
                            <span className="terminal-command">cat about.md</span>
                        </div>
                        <p className="terminal-output">
                            I specialize in <strong>backend development and AI/ML integration</strong>.
                            I build production-ready REST APIs with secure authentication, scalable database schemas, and RAG/LLM pipelines.
                            My work spans API optimization, WebSockets, vector search, OCR, and cloud deployment.
                        </p>

                        <div className="terminal-cursor" aria-hidden="true"></div>
                    </div>
                </div>

                <div className="skills-grid">
                    {skillDomains.map((domain, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-header">
                                <span className="skill-icon"><Icon name={domain.icon} /></span>
                                <h4>{domain.category}</h4>
                            </div>
                            <p className="skill-desc">{domain.description}</p>
                            <div className="skill-techs">
                                {domain.techs.map((tech, i) => (
                                    <span key={i} className="tech-tag">
                                        <TechLogo name={tech} />
                                        <span>{tech}</span>
                                    </span>
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

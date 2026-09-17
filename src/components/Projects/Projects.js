import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: '01',
            title: 'Smart Expense Tracker',
            category: 'AI/ML, FinTech & Backend',
            description: 'AI-powered expense manager with JWT-secured REST APIs, PostgreSQL, Groq Vision OCR, and RAG pipeline over ChromaDB for natural-language queries parsing with 94% accuracy. Deployed on Neon for reliable cloud uptime.',
            tech: ['Python', 'PostgreSQL', 'Groq Vision OCR', 'ChromaDB RAG', 'JWT APIs', 'Neon'],
            image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
            github: 'https://github.com/Ish200565/Expense-Tracker',
            live: 'https://ish200565.github.io/Expense-Tracker/'
        },
        {
            id: '02',
            title: 'MedVerify',
            category: 'Offline PWA, Healthcare',
            description: 'Offline-first PWA with Node.js, React, MongoDB, OCR-based inventory tracking, AWS Lambda/SES alerts, and scalable backend integration ensuring seamless camp management during remote field blackouts.',
            tech: ['Node.js', 'React', 'MongoDB', 'AWS Lambda/SES', 'OCR'],
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1170&auto=format&fit=crop',
            github: 'https://github.com/Ish200565/MedVerify-MVP',
            live: 'https://med-verify-mvp-6ecu.vercel.app/'
        },
        {
            id: '03',
            title: 'SocioSentiment',
            category: 'AI/ML & Social Analytics',
            description: 'Streamlit app using Hugging Face RoBERTa for multilingual sentiment and emotion analysis with live news-feed integration. Deployed with CI/CD pipelines ensuring continuous updates.',
            tech: ['Python', 'Streamlit', 'Hugging Face RoBERTa', 'CI/CD Pipelines'],
            image: 'https://plus.unsplash.com/premium_photo-1738663458243-7446dba4551d?w=600&auto=format&fit=crop',
            github: 'https://github.com/Ish200565/SocioSentiment',
            live: 'https://sociosentiment-3kxktkrdd5bnlppxsv3zme.streamlit.app/'
        },
        {
            id: '04',
            title: 'Campus Voice',
            category: 'Safety Platform, Real-Time',
            description: 'Flask/Django campus safety platform with NLP-based complaint triage, Map APIs, and real-time WebSocket communication for live incident tracking and heatmap visualization.',
            tech: ['Python', 'Flask/Django', 'NLP', 'WebSockets', 'Map APIs'],
            image: 'https://images.unsplash.com/photo-1758610840977-8ee55513281c?q=80&w=1170&auto=format&fit=crop',
            live: 'https://safecampus.vercel.app/',
            demo: 'https://www.linkedin.com/posts/ishika-belel-1669b12b7_campusvoice-aiforsafety-nlp-activity-7390775687315460096-QgRy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwk3p4BiRfzg4Zdq3OQ-HtGw8qIr-IwtIs'
        },
        
        {
            id: '05',
            title: 'TransactRank',
            category: 'Backend Service, FinTech',
            description: 'A backend service with a live frontend demonstrating API design, data consistency, duplicate prevention, and fair multi-factor ranking. Deployed on Render with PostgreSQL.',
            tech: ['Python', 'Flask', 'Flask-SQLAlchemy', 'PostgreSQL', 'Vanilla JS', 'Render'],
            image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
            live: 'https://transact-rank-1.onrender.com',
            backendApi: 'https://transact-rank.onrender.com',
            demo: 'https://drive.google.com/file/d/1fCkHJ_fiLU5c7ND937Whl_pYGsyuayUN/view?usp=sharing'
        },
        
        {
            id: '06',
            title: 'GharKaKhana',
            category: 'Web Application',
            description: 'Django web application connecting local food vendors with working bachelors. Custom vendor–customer workflows, order management, and secure authentication.',
            tech: ['Django', 'Python', 'HTML5', 'CSS3', 'Bootstrap'],
            image: 'https://media.istockphoto.com/id/2200378390/photo/a-retro-indian-lunch-box-filled-with-vegetarian-food-and-chapati.webp?a=1&b=1&s=612x612&w=0&k=20&c=kVzI-iGNwBaEXO66gIoGdGmuL9NArE58Bb6be3fuxdc=',
            demo: 'https://www.linkedin.com/posts/raina-r-mitra-145aa4358_miniproject-django-pythondeveloper-ugcPost-7423319759980756992-0ArN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwk3p4BiRfzg4Zdq3OQ-HtGw8qIr-IwtIs'
        }
    ];

    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <h2 className="section-title">
                    MY <span className="highlight">WORK</span>
                </h2>
                
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                                <span>GitHub</span>
                                            </a>
                                        )}
                                        {project.live && project.live !== '#' && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link primary">
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                        {project.backendApi && (
                                            <a href={project.backendApi} target="_blank" rel="noopener noreferrer" className="project-link">
                                                <span>Backend API</span>
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link primary">
                                                <span>Video / Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="project-info">
                                <div className="project-header">
                                    <span className="project-number">{project.id}</span>
                                    <span className="project-category">{project.category}</span>
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-more">
                    <p>Want to see more repositories & code?</p>
                    <a href="https://github.com/Ish200565?tab=repositories" target="_blank" rel="noopener noreferrer" className="see-more-btn">
                        See All Repositories <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

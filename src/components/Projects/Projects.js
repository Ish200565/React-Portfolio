import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: '01',
            title: 'SocioSentiment',
            category: 'AI/ML, Web App',
            description: 'Streamlit app for sentiment & emotion analysis of social issue text. Real-time inference & confidence visualization.',
            tech: ['Python', 'Streamlit', 'Hugging Face'],
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
            github: 'https://github.com/Ish200565/SocioSentiment',
            live: '#'
        },
        {
            id: '02',
            title: 'MedVerify',
            category: 'PWA, Healthcare',
            description: 'Offline-first PWA for NGOs to reduce medicine wastage & manage medical camps. Offline support & OCR-based tracking.',
            tech: ['Node.js', 'React', 'MongoDB', 'OCR'],
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
            github: '#',
            live: '#'
        },
        {
            id: '03',
            title: 'Campus Voice',
            category: 'Safety Platform',
            description: 'Campus safety platform with image verification, NLP, and heatmaps. Complaint prioritization & live issue visualization.',
            tech: ['Python', 'Flask', 'Django', 'NLP', 'Map APIs'],
            image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop',
            github: '#',
            live: '#'
        },
        {
            id: '04',
            title: 'GharKaKhana',
            category: 'Web App',
            description: 'Django web app connecting local vendors with working bachelors. Vendor–customer workflows & authentication.',
            tech: ['Django', 'Python', 'HTML', 'CSS', 'Bootstrap'],
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
            github: '#',
            live: '#'
        },
        {
            id: '05',
            title: 'FlashDSA',
            category: 'Full Stack',
            description: 'Full-stack app for practicing DSA via interactive flashcards. CRUD operations & secure DB integration.',
            tech: ['Flask', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
            github: '#',
            live: '#'
        }
    ];

    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <h2 className="section-title">
                    My <span className="highlight">Work</span>
                </h2>
                
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <span>GitHub</span>
                                        </a>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link primary">
                                            <span>Live Demo</span>
                                        </a>
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
                    <p>Want to see more?</p>
                    <a href="#" className="see-more-btn">
                        See All Works <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: '01',
            title: 'E-Commerce Store',
            category: 'Full Stack',
            description: 'A modern e-commerce platform with cart functionality, user authentication, and payment integration.',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
            github: '#',
            live: '#'
        },
        {
            id: '02',
            title: 'Task Management App',
            category: 'React App',
            description: 'A productivity app with drag-and-drop functionality, real-time updates, and team collaboration features.',
            tech: ['React', 'TypeScript', 'Firebase', 'TailwindCSS'],
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
            github: '#',
            live: '#'
        },
        {
            id: '03',
            title: 'Weather Dashboard',
            category: 'API Integration',
            description: 'A beautiful weather app with location-based forecasts, interactive maps, and hourly predictions.',
            tech: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
            image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
            github: '#',
            live: '#'
        },
        {
            id: '04',
            title: 'Portfolio Website',
            category: 'Web Design',
            description: 'A clean and modern portfolio website showcasing projects and skills with smooth animations.',
            tech: ['React', 'CSS3', 'Framer Motion', 'Responsive'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
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

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
            image: 'https://plus.unsplash.com/premium_photo-1738663458243-7446dba4551d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VudGltZW50JTIwYW5hbHlzaXN8ZW58MHx8MHx8fDA%3D',
            github: 'https://github.com/Ish200565/SocioSentiment',
            live: 'https://sociosentiment-3kxktkrdd5bnlppxsv3zme.streamlit.app/'
        },
        {
            id: '02',
            title: 'MedVerify',
            category: 'PWA, Healthcare',
            description: 'Offline-first PWA for NGOs to reduce medicine wastage & manage medical camps. Offline support & OCR-based tracking.',
            tech: ['Node.js', 'React', 'MongoDB', 'OCR'],
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            github: 'https://github.com/Ish200565/MedVerify-MVP',
            live: '#'
        },
        {
            id: '03',
            title: 'Campus Voice',
            category: 'Safety Platform',
            description: 'Campus safety platform with image verification, NLP, and heatmaps. Complaint prioritization & live issue visualization.',
            tech: ['Python', 'Flask', 'Django', 'NLP', 'Map APIs'],
            image: 'https://images.unsplash.com/photo-1758610840977-8ee55513281c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            demo: 'https://www.linkedin.com/posts/ishika-belel-1669b12b7_campusvoice-aiforsafety-nlp-activity-7390775687315460096-QgRy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwk3p4BiRfzg4Zdq3OQ-HtGw8qIr-IwtIs'
        },
        {
            id: '04',
            title: 'GharKaKhana',
            category: 'Web App',
            description: 'Django web app connecting local vendors with working bachelors. Vendor–customer workflows & authentication.',
            tech: ['Django', 'Python', 'HTML', 'CSS', 'Bootstrap'],
            image: 'https://media.istockphoto.com/id/2200378390/photo/a-retro-indian-lunch-box-filled-with-vegetarian-food-and-chapati.webp?a=1&b=1&s=612x612&w=0&k=20&c=kVzI-iGNwBaEXO66gIoGdGmuL9NArE58Bb6be3fuxdc=',
            demo:'https://www.linkedin.com/posts/raina-r-mitra-145aa4358_miniproject-django-pythondeveloper-ugcPost-7423319759980756992-0ArN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwk3p4BiRfzg4Zdq3OQ-HtGw8qIr-IwtIs'
        },
        {
            id: '05',
            title: 'FlashDSA',
            category: 'Full Stack',
            description: 'Full-stack app for practicing DSA via interactive flashcards. CRUD operations & secure DB integration.',
            tech: ['Flask', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
            image: 'https://plus.unsplash.com/premium_photo-1679957333039-285fb913aa2b?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            github: 'https://github.com/Ish200565/FlashDSA',
            demo: 'https://www.linkedin.com/posts/ishika-belel-1669b12b7_just-built-flashdsa-a-full-stack-web-app-activity-7356717778675863552-uQ7O?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwk3p4BiRfzg4Zdq3OQ-HtGw8qIr-IwtIs'
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

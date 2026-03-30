import React from 'react';
import './About.css';

const About = () => {
    const skills = [
        {
            category: 'Backend',
            icon: '🖥️',
            description: 'Building robust backend systems and APIs',
            techs: ['Python', 'Flask', 'Django', 'FastAPI', 'REST APIs']
        },
        {
            category: 'Frontend',
            icon: '💻',
            description: 'Crafting interactive and modern UIs',
            techs: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3']
        },
        {
            category: 'Databases',
            icon: '🗄️',
            description: 'Designing and managing databases',
            techs: ['MongoDB', 'SQLAlchemy', 'MySQL', 'SQLite']
        },
        {
            category: 'AI/ML',
            icon: '🤖',
            description: 'Developing intelligent models and solutions',
            techs: ['NLP', 'Hugging Face', 'TensorFlow', 'BERT', 'OpenCV', 'Matplotlib']
        },
        {
            category: 'Cloud & Deployment',
            icon: '☁️',
            description: 'Cloud, deployment, and workflow management',
            techs: ['Cloud Computing', 'API Integration', 'Docker (Basics)']
        },
        {
            category: 'Tools & Others',
            icon: '🛠️',
            description: 'Modern dev tools and platforms',
            techs: ['Git', 'GitHub', 'Streamlit', 'VS Code']
        }
    ];

    const techStack = [
        { name: 'Python', color: '#3572A5' },
        { name: 'Flask', color: '#000000' },
        { name: 'Django', color: '#092E20' },
        { name: 'FastAPI', color: '#009688' },
        { name: 'React.js', color: '#61DAFB' },
        { name: 'JavaScript (ES6+)', color: '#F7DF1E' },
        { name: 'HTML5', color: '#E34F26' },
        { name: 'CSS3', color: '#1572B6' },
        { name: 'MongoDB', color: '#47A248' },
        { name: 'SQLAlchemy', color: '#D34B1A' },
        { name: 'NLP', color: '#FF6F00' },
        { name: 'Hugging Face', color: '#FFD21F' },
        { name: 'TensorFlow', color: '#FF6F00' },
        { name: 'BERT', color: '#76B900' },
        { name: 'OpenCV', color: '#5C3EE8' },
        { name: 'Matplotlib', color: '#11557C' },
        { name: 'Cloud Computing', color: '#4285F4' },
        { name: 'API Integration', color: '#00B8D9' },
        { name: 'Docker', color: '#2496ED' },
        { name: 'Git', color: '#F05032' },
        { name: 'GitHub', color: '#181717' },
        { name: 'Streamlit', color: '#FF4B4B' },
    ];

    return (
        <section className="about" id="about">
            <div className="about-container">
                <h2 className="section-title">
                    WHAT <span className="highlight">I DO</span>
                </h2>

                <div className="about-content">
                    <div className="about-text">
                        <h3>About Me</h3>
                        <p>
                            I am a passionate Full Stack Developer dedicated to creating beautiful, responsive, and user-friendly web applications. I specialize in React and modern JavaScript, transforming designs into pixel-perfect, interactive experiences.<br/>
                            With a strong focus on backend systems and AI/ML model development, I build scalable solutions, secure workflows, and integrate intelligent models into impactful projects. I am passionate about real-world applications in healthcare and social good, and I continuously expand my skills in emerging technologies while delivering robust and user-friendly solutions.
                        </p>
                    </div>
                </div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-icon">{skill.icon}</div>
                            <h4>{skill.category}</h4>
                            <p>{skill.description}</p>
                            <div className="skill-techs">
                                {skill.techs.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="tech-stack-section">
                    <h3 className="tech-title">TECH STACK</h3>
                    <div className="tech-stack-grid">
                        {techStack.map((tech, index) => (
                            <div className="tech-item" key={index} style={{ '--tech-color': tech.color }}>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

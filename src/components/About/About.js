import React from 'react';
import './About.css';

const About = () => {
    const skills = [
        {
            category: 'Frontend',
            icon: '💻',
            description: 'Building responsive & interactive user interfaces',
            techs: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Sass']
        },
        {
            category: 'Styling',
            icon: '🎨',
            description: 'Creating beautiful & modern designs',
            techs: ['TailwindCSS', 'Bootstrap', 'Material UI', 'Styled Components', 'Figma']
        },
        {
            category: 'Tools',
            icon: '🛠️',
            description: 'Using modern development tools',
            techs: ['Git', 'VS Code', 'npm', 'Webpack', 'Vite', 'Chrome DevTools']
        }
    ];

    const techStack = [
        { name: 'React', color: '#61DAFB' },
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'HTML5', color: '#E34F26' },
        { name: 'CSS3', color: '#1572B6' },
        { name: 'Sass', color: '#CC6699' },
        { name: 'TailwindCSS', color: '#06B6D4' },
        { name: 'Git', color: '#F05032' },
        { name: 'Node.js', color: '#339933' },
        { name: 'Figma', color: '#F24E1E' }
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
                            I am a passionate Frontend Developer dedicated to creating beautiful, 
                            responsive, and user-friendly web applications. I specialize in React 
                            and modern JavaScript, transforming designs into pixel-perfect, 
                            interactive experiences.
                        </p>
                        <p>
                            With a keen eye for detail and a love for clean code, I bring ideas 
                            to life through modern web technologies. I'm constantly learning and 
                            staying updated with the latest frontend trends and best practices.
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

import React from 'react';
import './Contact.css';

const Contact = () => {
    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/Ish200565', icon: '⌘' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ishika-belel-1669b12b7/', icon: '◈' },
        { name: 'X', url: 'https://x.com/ishbelel', icon: '✦' },
        { name: 'Instagram', url: 'https://instagram.com/ish_belel', icon: '◉' }
    ];

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <h2 className="section-title">
                    Get In <span className="highlight">Touch</span>
                </h2>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-card">
                            <div className="contact-item">
                                <span className="contact-label">Name</span>
                                <h3>ISHIKA BELEL</h3>
                            </div>
                            
                            <div className="contact-item">
                                <span className="contact-label">Email</span>
                                <a href="mailto:ishikabelel@gmail.com">ishikabelel@gmail.com</a>
                            </div>
                            
                            <div className="contact-item">
                                <span className="contact-label">Location</span>
                                <p>Mumbai, India</p>
                            </div>

                            <div className="contact-item">
                                <span className="contact-label">Social</span>
                                <div className="social-links">
                                    {socialLinks.map((link, index) => (
                                        <a 
                                            key={index} 
                                            href={link.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="social-link"
                                        >
                                            <span className="social-icon">{link.icon}</span>
                                            <span className="social-name">{link.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form">
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" placeholder="Raj Gupta" required />
                            </div>
                            <div className="form-group">
                                <label>Your Email</label>
                                <input type="email" placeholder="raj@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="Tell me about your project..." required></textarea>
                            </div>
                            <button type="submit" className="submit-btn">
                                Send Message
                                <span className="btn-arrow">→</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-text">
                        <p>Designed and Developed by</p>
                        <h4>Ishika Belel</h4>
                    </div>
                    <span className="footer-year">© {new Date().getFullYear()}</span>
                </div>
            </footer>
        </section>
    );
};

export default Contact;

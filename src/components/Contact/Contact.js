import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Icon from '../Icon/Icon';

const Contact = () => {
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSending(true);
        setStatus({ type: '', message: '' });

        try {
            if (!process.env.REACT_APP_EMAILJS_SERVICE_ID ||
                !process.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
                !process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
                throw new Error('EmailJS configuration is missing');
            }

            await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                event.currentTarget,
                { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
            );
            event.currentTarget.reset();
            setStatus({ type: 'success', message: 'Message sent successfully.' });
        } catch (error) {
            console.error('EmailJS contact form error:', error);
            event.currentTarget.reset();
            setStatus({ type: 'success', message: 'Message received. Delivery could not be confirmed.' });
        } finally {
            setIsSending(false);
        }
    };

    const socialLinks = [
        { name: 'GitHub (230+ in 2026)', url: 'https://github.com/Ish200565', icon: 'github' },
        { name: 'LeetCode (60+ Solved)', url: 'https://leetcode.com/u/Ishika_belel/', icon: 'code' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ishika-belel-1669b12b7/', icon: 'linkedin' },
        { name: 'X (Twitter)', url: 'https://x.com/ishbelel', icon: 'x' },
        { name: 'Hackerrank', url: 'https://www.hackerrank.com/profile/ishikabelel', icon: 'code' }
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
                                            <span className="social-icon"><Icon name={link.icon} /></span>
                                            <span className="social-name">{link.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Your Name</label>
                                <input name="from_name" type="text" placeholder="Raj Gupta" required />
                            </div>
                            <div className="form-group">
                                <label>Your Email</label>
                                <input name="reply_to" type="email" placeholder="raj@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
                            </div>
                            <button type="submit" className="submit-btn" disabled={isSending}>
                                {isSending ? 'Sending...' : 'Send Message'}
                                <span className="btn-arrow">→</span>
                            </button>
                            {status.message && (
                                <p className={`form-status ${status.type}`} role="status">
                                    {status.message}
                                </p>
                            )}
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

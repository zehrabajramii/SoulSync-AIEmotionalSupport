import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './About.css';

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="app">
            {/* Navigation Bar */}
            <div className="navbar">
                <button className="navButton" onClick={() => navigate('/soulsync-ai')}>
                    Soul Sync AI
                </button>
                <button className="navButton" onClick={() => navigate('/psychologists')}>
                    Psychologists
                </button>
                <button className="navButton" onClick={() => navigate('/post-emotion')}>
                    Post Emotion
                </button>
            </div>

            {/* About Section */}
            <div className="about-page">
                <h1 className="about-title">About <span className="gradient-text">SoulSync</span></h1>
                <p className="about-subtitle">
                    Your AI-powered emotional support companion, designed to <strong>help you navigate emotions</strong> and 
                    find motivation.
                </p>

                {/* Three Sections in One Row */}
                <div className="about-container">
                    {/* Why Choose SoulSync */}
                    <div className="about-section">
                        <h2>Why Choose <span className="gradient-text">SoulSync?</span></h2>
                        <ul>
                            <li>💡 AI-driven emotional insights for <strong>personalized support</strong></li>
                            <li>💬 Connect with certified <strong>psychologists & wellness experts</strong></li>
                            <li>🌍 A safe space to <strong>express, share, and grow emotionally</strong></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="about-section">
                        <h2>📞 Contact Us</h2>
                        <p><FaEnvelope className="icon" /> <strong>Email:</strong> support@soulsync.ai</p>
                        <p><FaPhone className="icon" /> <strong>Phone:</strong> +1 (800) 555-1212</p>
                        <p><FaMapMarkerAlt className="icon" /> <strong>Location:</strong> 123 Mindfulness Lane, Wellness City, AI-2025</p>
                    </div>

                    {/* Follow Us */}
                    <div className="about-section">
                        <h2>🌐 Follow Us</h2>
                        <p><FaGlobe className="icon" /> <strong>Website:</strong> <a href="https://www.soulsync.ai" target="_blank">www.soulsync.ai</a></p>
                        <p><FaInstagram className="icon" /> <strong>Instagram:</strong> @SoulSyncAI</p>
                        <p><FaLinkedin className="icon" /> <strong>LinkedIn:</strong> <a href="https://linkedin.com/company/soulsync-ai" target="_blank">linkedin.com/company/soulsync-ai</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
